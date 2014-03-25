angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('BeerService', function($http) {
var beers = $http.get('http://brewingupacure.org/Beers/index.json').success(successCallback);
alert(beers);
//var beers = $.parseJSON(window.localStorage.getItem('beers'));
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
	var brewers = $.parseJSON(window.localStorage.getItem('brewers'));
    

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
