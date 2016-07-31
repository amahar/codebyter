// drag can use, option, methods, and events to customize the behavior:
$(function(){
	//testing the create EVENT:
	$('.test-draggable1').draggable({
		create: function(event, ui) {
			console.log(ui, event);
		}
	});

	//testing containment and other OPTIONS from draggable:
	$('.test-draggable1').draggable({
		containment: 'body', //contain within 
		cursor: 'cell', //change cursor type
		snap: 'p' //snap to element/class etc
	});

	$('.test-draggable2').draggable(); 
});