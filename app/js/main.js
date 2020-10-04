$(function(){
$('.header__slider').slick({
	arrows: false,
	dots: true,
	autoplay: true,
 	autoplaySpeed: 2000,
});
$('.video-play__icon').click(function(){
	$('.video-play').addClass('hide');
	$('.video__wrap').addClass('hide');
});

	
});