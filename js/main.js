
$(document).ready(function(){
  $('.sayings').slick({
    '.single-item': 2
  });
});
var menu = $('#mobileMenu')


$('#mobileButton').click(function(event){
  event.preventDefault();
  if (menu.is(":visible")) {
    menu.slideUp(400);
    $(this).removeClass("open");
    $(this).css({
    'background-image': 'url("img/menu.svg")',
    'height': '20px',
    'width': '20px'
  })

  }
  else {
    menu.slideDown(400);
    $(this).addClass("open");
    $(this).css({
    'background-image': 'url("img/close.svg")',
    'height': '20px',
    'width': '20px'
  })
  }
});


// $( "#mobileButton" ).click(function() {
//   $( "#mobileMenu" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
//    $('#mobileButton').css({
//         'background-image': 'url("img/close.svg")',
//         'height': '20px',
//         'width': '20px'
//   });
//    else
// });


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

