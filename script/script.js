$(document).ready(function(){

/*$('.popup').delay(4000).fadeIn(500);
$('.popup .cerrar').click(function(){
	$('.popup').fadeOut();
})*/

$('#tab-uno').addClass('active');
$('#hosting-dos').fadeOut();
$('#hosting-tres').fadeOut();

$('#tab-uno').click(function(){
	$('#hosting-uno').fadeIn(10);
	$('#hosting-dos').fadeOut(10);
	$('#hosting-tres').fadeOut(10);
	$('#tab-uno').addClass("active");
	$('#tab-dos').removeClass("active");
	$('#tab-tres').removeClass("active");
})

$('#tab-dos').click(function(){
	$('#hosting-dos').fadeIn(10);
	$('#hosting-uno').fadeOut(10);
	$('#hosting-tres').fadeOut(10);
	$('#tab-dos').addClass("active");
	$('#tab-uno').removeClass("active");
	$('#tab-tres').removeClass("active");
})

$('#tab-tres').click(function(){
	$('#hosting-tres').fadeIn(10);
	$('#hosting-dos').fadeOut(10);
	$('#hosting-uno').fadeOut(10);
	$('#tab-tres').addClass("active");
	$('#tab-dos').removeClass("active");
	$('#tab-uno').removeClass("active");
})

})