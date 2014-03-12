
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
    FastClick.attach(document.body);
    getBeers();
    getBrewers();
    initPushwoosh();


}
	
	
function initPushwoosh()
{
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
 
    pushNotification.registerDevice({ projectid: "509023216724", appid : "3C2AE-AEC40" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
 
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
            var userData = event.notification.userdata;
                                 
            if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        navigator.notification.alert(title);
    });
}	
	
	
	
	/*Fixes overlap on front page header */
$(window).on('load', function () {
    $(this).trigger('resize');
});

