 $(document).ready(function (){
  $('.slider').slick();
 });
  $(document).ready(function slider (){
  $('.second_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	prevArrow: '.first_backward_button',
	nextArrow: '.first_forward_button',
  });
 });
  $(document).ready(function (){
  $('.third_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	 prevArrow: '.second_backward_button',
	nextArrow: '.second_forward_button',
  });
 });
    $(document).ready(function (){
  $('.fourth_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	 prevArrow: '.third_backward_button',
	nextArrow: '.third_forward_button',
  });
 });
  let openingMenu = document.querySelector('.opening_catalog_block');
  function hide () {
  	openingMenu.classList.toggle('hide_catalog_block');
  }
 

