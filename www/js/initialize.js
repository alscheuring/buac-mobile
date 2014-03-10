// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
    FastClick.attach(document.body);
    getBeers();
    getBrewers();




    }
    
	
	/*Fixes overlap on front page header */
$(window).on('load', function () {
    $(this).trigger('resize');
});


}());