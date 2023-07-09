$(document).ready(function () {
	//Technologies we are using
	$("#technologiesWeAreUsingItem").owlCarousel({
		margin: 10,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				// nav: true,
				loop: true,
			},
			401: {
				items: 2,
				// nav: true,
				loop: true,
			},
			481: {
				items: 3,
				// nav: true,
				loop: true,
			},
			576: {
				items: 4,
				// nav: true,
				loop: true,
			},
			768: {
				items: 5,
				// nav: false,
				loop: true,
			},
			992: {
				items: 6,
				// nav: false,
				loop: true,
			},
			1200: {
				items: 7,
				// nav: false,
				loop: true,
			},
			1400: {
				items: 8,
				// nav: true,
				loop: true,
			},
		},
	});

	//Clients review
	$("#clientReviewItem").owlCarousel({
		margin: 10,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				loop: true,
			},
			600: {
				items: 2,
				nav: true,
				loop: true,
			},
			1200: {
				items: 3,
				// nav: true,
				loop: true,
			},
		},
	});
});
