// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"824841663931","ecb":"app.onNotificationGCM"});
    	
    FastClick.attach(document.body);
    getBeers();
    getBrewers();
    registerPushes();




    }
    
	
	/*Fixes overlap on front page header */
$(window).on('load', function () {
    $(this).trigger('resize');
});


}());