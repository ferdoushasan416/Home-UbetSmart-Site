(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


$('.testimonial-active').owlCarousel({
    loop:true,
    margin:20,
	items:3,
    nav:false,
	dots:false,
	autoplay:true,
      responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
    }
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', 
	topDistance: '300', 
	topSpeed: 300, 
	animation: 'fade',
	animationInSpeed: 200, 
	animationOutSpeed: 200,
	scrollText: '<i class="fa-solid fa-angle-up"></i>',
	activeOverlay: false,
});


// WOW active
new WOW().init();


})(jQuery);