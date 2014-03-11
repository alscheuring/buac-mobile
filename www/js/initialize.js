
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
    /*FastClick.attach(document.body);
    getBeers();
    getBrewers();*/
    
        var pushNotification;
        pushNotification = window.plugins.pushNotification;
        pushNotification.register(successHandler, errorHandler,{"senderID":"509023216724","ecb":"onNotificationGCM"});
    	console.log(pushNotification);
    	alert("pushNotification create");
  /*  	
if ( device.platform == 'android' || device.platform == 'Android' )
{
	alert("starting Registration");   
    pushNotification.register(
        successHandler,
        errorHandler, {
            "senderID":"509023216724",
            "ecb":"onNotificationGCM"
        });
       	console.log(pushNotification);
     
}
else
{
    pushNotification.register(
        tokenHandler,
        errorHandler, {
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "ecb":"onNotificationAPN"
        });
}
*/

// result contains any message sent from the plugin call
function successHandler (result) {
    alert('Successhandleer result = ' + result);
}

// result contains any error description text returned from the plugin call
function errorHandler (error) {
    alert('error = ' + error);
}

function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    alert('device token = ' + result);
}

// iOS
function onNotificationAPN (event) {
    if ( event.alert )
    {
        navigator.notification.alert(event.alert);
    }

    if ( event.sound )
    {
        var snd = new Media(event.sound);
        snd.play();
    }

    if ( event.badge )
    {
        pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
    }
}


    }//deviceready
    
	
// Android
function onNotificationGCM(e) {
//    $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');

        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                 
                     // Your GCM push server needs to know the regID before it can push to this device
             // here is where you might want to send it the regID for later use.
             PushWoosh.appCode = "3C2AE-AEC40";
             PushWoosh.register(e.regid, function(data) {
                         alert("PushWoosh register success: " + JSON.stringify(data));
                     }, function(errorregistration) {
                         alert("Couldn't register with PushWoosh" +  errorregistration);
                     });         
                 
                 
                 
                    console.log("Regid " + e.regid);
                    alert('registration id = '+e.regid);
                }
                break;

            case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert('message = '+e.message+' msgcnt = '+e.msgcnt);
                break;

            case 'error':
                alert('GCM error = '+e.msg);
                break;

            default:
                alert('An unknown GCM event has occurred');
                break;
        }
}
	
	
	
	
	
	
	/*Fixes overlap on front page header */
$(window).on('load', function () {
    $(this).trigger('resize');
});

