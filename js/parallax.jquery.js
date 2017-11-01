(function($){

$.fn.parallax = function(options) {

	// init
	var element = this;
	var scrollprogress = 0;

	// creating fixed position element to boost Chromium performance
	if ($('#fh3fsf').length > 0) {        // checking if element isn't already created by other instance of this plug-in
	} else { $(document.body).append('<div id="fh3fsf" style="position: fixed"></div>'); }
	

	// settings
	var settings = $.extend({
		target: "background",
		factor: "0.25",
		transition: "none",
		transitionfactor: "0.5"
	}, options );

	// stopping execution for mobile phones
	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
	}
		 else {

	// grabbing settings
	var factor = settings.factor;
	var transition = settings.transition;
	var transitionfactor = settings.transitionfactor;

	// grabbing properties
	var elementdepth = $(element).offset().top;
	var backgroundcssx = $(element).css("background-position").split(" ")[0];
	var opacitycss = $(element).css("opacity");

	// application
	if (settings.target == "background") {
		$(window).scroll(function(){
        	scrollprogress = $(window).scrollTop();
        	$(element).css({"background-position": backgroundcssx + " " + ((scrollprogress * factor) - (elementdepth * factor)) + "px"});
		});
	}
	if (settings.target == "element") {
		$(window).scroll(function(){
        	scrollprogress = $(window).scrollTop();
        	$(element).css({"margin-top": (scrollprogress * factor)});
        	if (transition == "fade") {
        		$(element).css({"opacity": opacitycss - (scrollprogress / ((1 - transitionfactor) * 1000))});
        	}
		});
	}

	}

};

})(jQuery);