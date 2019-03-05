
$('document').ready(function(){
	$('h1').hover(function(){
		$('body').toggleClass('colorful');  
	});

	$('button').click(function() {
    	$('.announcement').toggle();
	});


});




