$('h1').text('This was added by jQuery');
$('ul').append('<li>item 4</li>');
$('ul').prepend('<li>item 0</li>');
$('ul li').css('color', 'red');
$('ul li:first-child').css('color', 'blue');

$(document).ready(function(){                  
  $('h3').click(function(){
        $('h1').text('yo, we adding dynamic stuff');
    });
                  
});