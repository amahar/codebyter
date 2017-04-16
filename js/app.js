var mymodule = require('./mymodule');
var markdown = require('markdown').markdown; 

console.log(markdown.toHTML('A paragrap in **markdown**!'));

mymodule.hello(); 
mymodule.bye(); 