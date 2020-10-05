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
$('.quotes__slider-name').slick({
	fade: true,
	arrows: false,
  	asNavFor: '.quotes__slider-photo',
});
$('.quotes__slider-photo').slick({
	asNavFor: '.quotes__slider-name',
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt=""><img>',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""><img>',
});

	
});