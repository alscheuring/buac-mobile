    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    
    getBeers();
    getBrewers();
    }
    
	
	$(function() {
	    FastClick.attach(document.body);
	});