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


	//finding out what is $('selector')[0];
	var test1 = $('#input');
	var test2 = $('#input')[0]; //this is same as document.getIdByName(input);
	var test3 = $('#input')[1];
	console.log(test1);
	console.log(test2);
	console.log(test3);
	console.log(test1.title);
	//console.log(test2.title);


	$('#event-input').data('name','data works');
	console.log($('#event-input').data('name'));
	console.log($('#event-output').data('name'));

});
