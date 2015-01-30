// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


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

