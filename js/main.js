;(function($) {
		"use strict";
		
	$('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
				arrows: false,
				infinity: true,
				autoplay: false,
				autoplaySpeed: 1000,
				cssEase: 'ease-out',
				speed: 1500,
				appendDots: '.hero-slider__check',
		});

		$('.hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
				console.log(currentSlide);
			});

		
	//	 add masonry
		$('.portfolio-examp').masonry({
		itemSelector: '.portfolio-item',
	});


	// add isotope
	$('.portfolio-examp').isotope();

	var filters = [];

	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');

		var isChecked = $(this).hasClass('active');

		var filter = $(this).attr('data-filter');

		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});

	function addFilter( filter ) {
		if ( filters.indexOf( filter ) == -1 ) {
			filters.push( filter );
		}
	}

	function removeFilter( filter ) {
		var index = filters.indexOf( filter);
		if ( index != -1 ) {
			filters.splice( index, 1 );
		}
	}

	//new slider
	// $('.ba-slider-new').masonry({
	// 	itemSelector: '.portfolio-item',
	// });
	//	function initSlider() {
	//		$('.ba-slider-new').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		arrows: false,
	// 		fade: true,
	// 		asNavFor: '.ba-slider-new-nav'
	// 	});
		
	//	};
	//	$('.ba-slider-new-nav').slick({
	// 		slidesToShow: 6,
	// 		slidesToScroll: 1,
	// 		asNavFor: '.ba-slider-new',
	// 		dots: false,
	// 		// centerMode: true,
	// 		focusOnSelect: true
	// 	});
		
	//	$('.items-navi button').on('click', function(){
	//		initSlider();
	//		$('.items-navi button').addClass('nav-btn');
	//	})

	
})(jQuery); 
	
var map;
function initMap() {
	var myLatLng = { lat: 40.663283, lng: -73.955089 };
	var myLatLngCenter = { lat: 40.652960, lng: -73.937113 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: myLatLngCenter,
		styles: [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#bdbdbd"
			}
		]
	},
	{
		"featureType": "administrative.neighborhood",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "poi.business",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dadada"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#c9c9c9"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	}
]
 });
 var marker = new google.maps.Marker({
	 position: new google.maps.LatLng(40.663283, -73.955089),
	 icon: 'img/marker-map.png',
	 map: map,
	 title: 'title'
 });
}



const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB29GFItZiDCx4QqCTDLLAOG30ryMUMxik&callback=initMap';
document.head.appendChild(googleMapsScript);