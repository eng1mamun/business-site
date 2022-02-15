(function ($) {
"use strict";
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.height = "80px";
    document.getElementById("logo").style.width = "80px";
  } else {
    document.getElementById("nav").style.height = "120px";
    document.getElementById("logo").style.width = "120px";
  }
}


    // owlCarousel
$('.team-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav: false,
    animateIn: true,
    animateOut:true,
    autoplayTimeout:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
})
// mixitup
var mixer = mixitup('.portfolio-content');

// counterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// Navbar Fixed Start



})(jQuery);

