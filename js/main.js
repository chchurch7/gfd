
$(document).ready(function(){
  $('.sayings').slick({
    '.single-item': 2
  });
});

$(function(){
	$('.mobile-nav-trigger').click(function(){
		if($(this).next().css('display')=='block'){
			$(this).next().slideUp();
		}else{
			$(this).next().slideDown();
		}
    return false;
	});
});