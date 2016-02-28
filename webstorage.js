/*git devtest*/
/*git devetest 2 */
function testFunc(){
var enter = document.getElementById("id1").value;
localStorage.setItem("first", enter);
var name = localStorage.getItem("first");
alert(name);
}