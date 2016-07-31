//this needs to run with index.html to produce correct results


$(function(){


	//.attr(); 
	//1. $(selector).attr(attribute) - return the value of attribute
	var attr = $('p').attr('title');// title is the attribute on index page -> attr now = value of 'title'
	$('#input').text(attr); // add the attr value to #input
	console.log(attr);// atrribute jquery, which is the value of 'title'

	//2.$(selector).attr(attribute, value) - set the attribute and its value to object
	$('p').attr('class', 'class added');

	
	//so .val() is to set/get values of the attributes e.g. forms, buttons
	//and .text() is to set/get text of element

	//.html()

	//1.$(selector).html(); // returns the content, it will include any child tags/elements availalbe
	var getHtml = $('#html').html();
	var getText = $('#html').text(); //get the text in the id attribute
	console.log(getHtml);
	console.log(getText);

	//see if there is difference between .html() & .append () 
	//2. $(selector).html(content) // set the content 
	$('#html').html('<p>this is the new html paragraph</p>');  // ---> the .html() will overrides the content
	$('#html').append('<p>this is the appended paragraph</p>'); // ----> the .append() just adds onto the content
	var getFlex = $('<div>', {id:'html', class:'getFlex'});
	$('#html').append(getFlex);



// var CANVAS_WIDTH = 245,
// 	CANVAS_HEIGHT = 500;

//  var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
//           "' height='" + CANVAS_HEIGHT + "'></canvas");
//         // var canvas = canvasElement.get(0).getContext("2d");
//         // canvasElement.appendTo('body');
// console.log(canvasElement);
// console.log(canvasElement[0]);
//console.log(canvas);
var a = document.createElement('P');
document.getElementById('create-element').appendChild(a);
var b = document.getElementById('create-element');
console.log(b);

var x = document.getElementById('input');
console.log(x);
var y = document.getElementsByTagName('p');
console.log(y); 
});



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


