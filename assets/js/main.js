(function ($) {
	'use strict';

	$('.isotope-filtering').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
			horizontalOrder: true
		}
	});

	//one page nav
	$('#nav').onePageNav();


	//magnific popup
	$('.project-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}

	});

	//wow

})(jQuery)