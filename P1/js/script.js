$('document').ready(function(){
    $('.close').click(function(){
    	$(this).parent().addClass('hide');  
  	});

  	$('button').click(function(){
    	$(this).parent().next('.window').removeClass('hide');  
  	});
});