//this needs to run with index.html to produce correct results


$(function(){

	//this returns the value of attr
	//$(selector).attr(attribute) - return the value of attribute

	var attr = $('p').attr('title');// title is the attribute on index page -> attr now = value of 'title'
	$('#input').text(attr);
	console.log(attr);// atrribute jquery, which is the value of 'title'


	//$(selector).attr(attribute, value) - set the attribute and its value to object
	$('p').attr('class', 'new class');

	//.html()


});
