angular.module('starter.controllers', [])




// A simple controller that fetches a list of data from a service
.controller('BrewerIndexCtrl', function($scope, BrewerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.brewers = BrewerService.all();
})



// A simple controller that shows a tapped item's data
.controller('BrewerDetailCtrl', function($scope, $stateParams, BrewerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.brewer = BrewerService.get($stateParams.brewerId);
  
})




// A simple controller that fetches a list of data from a service
.controller('BeerIndexCtrl', function($scope, BeerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beers = BeerService.all();
})



// A simple controller that shows a tapped item's data
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beer = BeerService.get($stateParams.beerId);
  
})


;


