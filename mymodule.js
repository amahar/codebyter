<!-- this is a bad example it seems, as if i am trying to run node.js inside an html page -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<path d="m399 210c0 3-1 5-3 7l-133 133c-2 2-5 3-7 3-2 0-5-1-7-3l-133-133c-2-2-3-4-3-7 0-2 1-4 3-6l15-15c1-1 4-2 6-2 3 0 5 1 7 2l112 113 112-113c2-1 4-2 7-2 2 0 5 1 6 2l15 15c2 2 3 4 3 6z"></path>
url('data:image/svg+xml;utf8,<svg id="icon-dir-down" viewBox="0 0 32 32"><path d="M32,2L16,30L0,2H32"/></svg>')

<style type="text/css">
body {
background-image:url('data:image/svg+xml;utf8,<svg id="icon-dir-down" viewBox="0 0 32 32"><path d="M32,2L16,30L0,2H32"/></svg>');
	}
</style>
</body>
<script type="text/javascript">
	var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
console.log('hello');
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/') {
res.write('You\'re at the reception desk. How can I help you?');
}
else if (page == '/basement') {
res.write('You\'re in the wine cellar. These bottles are mine!');
}
else if (page == '/floor/1/bedroom') {
res.write('Hey, this is a private area!');
}
res.end();
});
server.listen(8080);


</script>
</html>