// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
        $rootScope.DEVICEID = 'C5642141-98C5-4443-B0E0-6966ED32BE2C';

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log("HERES THE Ready time");

      var device = ionic.Platform.device();
      var deviceID = device.uuid;  
      //Note to self. This wont work when testing locally. Only a phonegap.build will work. 
      //This is because the cordova plugins aren't locally loaded for fucks sake.
      $rootScope.DEVICEID = deviceID;
         
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|untappd):/);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'

        }
      }
    })



    // the pet tab has its own child nav-view and history
    .state('tab.brewer-index', {
      url: '/brewers',
      views: {
        'brewers-tab': {
          templateUrl: 'templates/brewer-index.html',
          controller: 'BrewerIndexCtrl'
        }
      }
    })

    .state('tab.brewer-detail', {
      url: '/brewer/:brewerId',
      views: {
        'brewers-tab': {
          templateUrl: 'templates/brewer-detail.html',
          controller: 'BrewerDetailCtrl'
        }
      }
    }) 


    .state('tab.beer-detail', {
      url: '/beer/:beerId',
      views: {
        'brewers-tab': {
          templateUrl: 'templates/beer-detail.html',
          controller: 'BeerDetailCtrl'
        }
      }
    })




    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('tab.schedule', {
      url: '/schedule',
      views: {
        'about-tab': {
          templateUrl: 'templates/schedule.html',
          controller: 'AboutCtrl'
        }
      }
    })    
    
    .state('tab.sponsors', {
      url: '/sponsors',
      views: {
        'about-tab': {
          templateUrl: 'templates/sponsors.html',
          controller: 'AboutCtrl'
        }
      }
    })    
    
    .state('tab.sponsor-detail', {
      url: '/sponsor/:sponsorId',
      views: {
        'about-tab': {
          templateUrl: 'templates/sponsor-detail.html',
          controller: 'SponsorDetailCtrl'
        }
      }
    })
    
    
    .state('tab.trub', {
      url: '/trub',
      views: {
        'about-tab': {
          templateUrl: 'templates/trub.html',
          controller: 'AboutCtrl'
        }
      }
    })    
    .state('tab.cysticfibrosis', {
      url: '/cysticfibrosis',
      views: {
        'about-tab': {
          templateUrl: 'templates/cysticfibrosis.html',
          controller: 'AboutCtrl'
        }
      }
    })                    
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

