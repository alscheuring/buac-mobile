angular.module('starter.services', [])

.factory('DataService', function($http) {
 //Go get that brewer info
 $http({method: 'GET', url: 'http://brewingupacure.org/Brewers/index.json'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      	var brewers = angular.toJson(data);
      	window.localStorage.setItem("brewers", brewers);
		console.log(angular.fromJson(window.localStorage.getItem('brewers')));
      
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      console.log("didn't work");  
      // or server returns response with an error status.
    });
    
 $http({method: 'GET', url: 'http://brewingupacure.org/Beers/index.json'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      	var beers = angular.toJson(data);
      	window.localStorage.setItem("beers", beers);
		console.log(angular.fromJson(window.localStorage.getItem('beers')));
      
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      console.log("didn't work");  
      // or server returns response with an error status.
    });    

})
/**
 * A simple example service that returns some data.
 */
.factory('BeerService', function() {

var beers = angular.fromJson(window.localStorage.getItem('beers'));
  return {
    all: function() {
      return beers;
    },
    get: function(beerId) {
      // Simple index lookup
	var correctBeer = [];
    angular.forEach(beers, function(beer) {
      if (beer.Beer.id == beerId) correctBeer = beer;
    });
      
      return correctBeer;
    }
  }
})



.factory('BrewerService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
	var brewers = angular.fromJson(window.localStorage.getItem('brewers'));
    

  return {
    all: function() {
      return brewers;
    },
    get: function(brewerId) {
      // Simple index lookup
	var correctBrewer = [];
    angular.forEach(brewers, function(brewer) {
      if (brewer.Brewer.id == brewerId) correctBrewer = brewer;
    });
      
      return correctBrewer;
    }
  }
});
