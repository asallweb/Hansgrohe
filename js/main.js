$(document).ready(function () {
	/* Phone validation */
	$(".wpcf7-validates-as-tel").mask("+7 (999) 999-9999");

	/* Popup initialize */
	popupInitialize();

	/* Animate.css initialize */
	$(".hasAnimation").each(function () {
		var animateName = $(this).data("animate");
		$(this)
			.addClass("hidden")
			.viewportChecker({
				classToRemove: "hidden",
				classToAdd: "visible animate__animated " + animateName,
				//offset: 200
			});
	});
});
$(window).resize(function () {});

$(".slider-block__slider").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 993,
			settings: {
				arrows: false,
				variableWidth: true,
			},
		},
	],
});

$(".certificates__slider").slick({
	infinite: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 993,
			settings: {
				arrows: false,
				variableWidth: true,
			},
		},
	],
});

function tabsInit() {
	$(".container").each(function () {
		let ths = $(this);
		ths.find(".tab-item").not(":first").hide();
		ths
			.find(".tab-buttons .scroll-wrapper button")
			.click(function () {
				ths.find(".tab-buttons .scroll-wrapper button").removeClass("active").eq($(this).index()).addClass("active");
				ths.find(".tab-item").hide().eq($(this).index()).fadeIn();
			})
			.eq(0)
			.addClass("active");
	});
}

tabsInit();
