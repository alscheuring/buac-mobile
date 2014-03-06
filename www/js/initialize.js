// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
  
    var updateStatusBar = navigator.userAgent.match(/iphone|ipad|ipod/i) &&
        parseInt(navigator.appVersion.match(/OS (\d)/)[1], 10) >= 7;
    if (updateStatusBar) {
        document.body.style.webkitTransform = 'translate3d(0, 20px, 0)';
    }       
    FastClick.attach(document.body);

    getBeers();
    getBrewers();

    }
    
	
	/*Fixes overlap on front page header */
$(window).on('load', function () {
    $(this).trigger('resize');
});


}());