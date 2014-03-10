// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	
	document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
  
 /*   var updateStatusBar = navigator.userAgent.match(/iphone|ipad|ipod/i) &&
        parseInt(navigator.appVersion.match(/OS (\d)/)[1], 10) >= 7;
    if (updateStatusBar) {
        document.body.style.webkitTransform = 'translate3d(0, 20px, 0)';
    }
    */       
if ( device.platform == 'android' || device.platform == 'Android' )
{
    pushNotification.register(
        successHandler,
        errorHandler, {
            "senderID":"509023216724",
            "ecb":"onNotificationGCM"
        });
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
    
// result contains any message sent from the plugin call
function successHandler (result) {
    alert('result = ' + result);
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

// Android
function onNotificationGCM(e) {
    $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');

    switch( e.event )
    {
         case 'registered':
         if ( e.regid.length > 0 )
         {
             // Your GCM push server needs to know the regID before it can push to this device
             // here is where you might want to send it the regID for later use.
             PushWoosh.appCode = "YOUR_PUSHWOOSH_APP_ID";
             PushWoosh.register(e.regid, function(data) {
                         alert("PushWoosh register success: " + JSON.stringify(data));
                     }, function(errorregistration) {
                         alert("Couldn't register with PushWoosh" +  errorregistration);
                     });
              
         }
         break;

    case 'message':
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if ( e.foreground )
        {
            $("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');

            // if the notification contains a soundname, play it.
            var my_media = new Media("/android_asset/www/"+e.soundname);
            my_media.play();
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if ( e.coldstart )
            {
                $("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
            }
            else
            {
                $("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
            }
        }

        $("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
        $("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
    break;

    case 'error':
        $("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
    break;

    default:
        $("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
    break;
  }
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