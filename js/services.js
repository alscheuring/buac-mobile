angular.module('starter.services', [])

//DATAService gets all the JSON data from the server on startup and puts it into localStorage
.factory('DataService', function($http) {
 //Go get that event info
 $http({method: 'GET', url: 'http://brewingupacure.org/Information/eventData.json'}).
    success(function(data, status, headers, config) {
      	var eventData = angular.toJson(data);
      	window.localStorage.setItem("eventData", eventData);
    }).
    error(function(data, status, headers, config) {
    });
    
 //Go get that vote info
 $http({method: 'GET', url: 'http://brewingupacure.org/Votes/view/C5642141-98C5-4443-B0E0-6966ED32BE2C.json'}).
    success(function(data, status, headers, config) {
      	var spigotVote = angular.toJson(data);
      	window.localStorage.setItem("spigotVote", spigotVote);


        //This will get a specific record
        //console.log(window.localStorage.getItem("spigotVote"));
        //console.log("HI THERE YO");
        //var json = JSON.parse(spigotVote);
        //console.log(json.vote.Vote['id']);
      //  console.log(spigotVote);
    }).
    error(function(data, status, headers, config) {
    });
        
    

 //Go get that monetary sponsor info
 $http({method: 'GET', url: 'http://brewingupacure.org/Information/onlySponsors.json?type=all'}).
    success(function(data, status, headers, config) {
      	var allSponsors = angular.toJson(data);
      	window.localStorage.setItem("allSponsors", allSponsors);
    }).
    error(function(data, status, headers, config) {
    });
    

 $http({method: 'GET', url: 'http://brewingupacure.org/Information/onlySponsors.json?type=monetary'}).
    success(function(data, status, headers, config) {
      	var monetarySponsors = angular.toJson(data);
      	window.localStorage.setItem("monetarySponsors", monetarySponsors);
    }).
    error(function(data, status, headers, config) {
    });
    
 //Go get that commercial beer sponsor info
 $http({method: 'GET', url: 'http://brewingupacure.org/Information/onlySponsors.json?type=commercialBeer'}).
    success(function(data, status, headers, config) {
      	var commercialBeer = angular.toJson(data);
      	window.localStorage.setItem("commercialBeerSponsors", commercialBeer);
    }).
    error(function(data, status, headers, config) {
    });    


 //Go get that commercial beer sponsor info
 $http({method: 'GET', url: 'http://brewingupacure.org/Information/onlySponsors.json?type=food'}).
    success(function(data, status, headers, config) {
      	var food = angular.toJson(data);
      	window.localStorage.setItem("foodSponsors", food);
    }).
    error(function(data, status, headers, config) {
    });    

 //Go get that brewer info
 $http({method: 'GET', url: 'http://brewingupacure.org/Brewers/index.json'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      	var brewers = angular.toJson(data);
      	window.localStorage.setItem("brewers", brewers);
		//console.log(angular.fromJson(window.localStorage.getItem('brewers')));
      
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
    //  console.log("didn't work");  
      // or server returns response with an error status.
    });
    
 $http({method: 'GET', url: 'http://brewingupacure.org/Beers/index.json'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      	var beers = angular.toJson(data);
      	window.localStorage.setItem("beers", beers);
	//	console.log(angular.fromJson(window.localStorage.getItem('beers')));
      
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
   //   console.log("didn't work");  
      // or server returns response with an error status.
    });    

})

//VoteService will unset the existing favorite and set the current favorite locally
.factory('VoteService', function() {
    //This will get a specific record
        console.log("HI THERE YO");
        var spigotVote = JSON.parse(window.localStorage.getItem("spigotVote"));
          //  console.log(spigotVote);
        return spigotVote;
  
})

//SponsorService gets all the sponsor types and puts the into local storage.
.factory('SponsorService', function() {
      var allSponsors = angular.fromJson(window.localStorage.getItem('allSponsors'));
  return {
    monetary: function() {
     var monetarySponsors = angular.fromJson(window.localStorage.getItem('monetarySponsors'));
      return monetarySponsors;
    },
    commercialBeers: function() {
	  var commercialBeers = angular.fromJson(window.localStorage.getItem('commercialBeerSponsors'));
      return commercialBeers;
    },
    foods: function() {
      var foods = angular.fromJson(window.localStorage.getItem('foodSponsors'));
	  return foods;
    },        
    get: function(sponsorId) {
    	console.log(sponsorId);
      // Simple index lookup
	var correctSponsor = [];
    angular.forEach(allSponsors, function(sponsor) {
      if (sponsor.id == sponsorId) correctSponsor = sponsor;
    });
      console.log(correctSponsor);
      return correctSponsor;
    }
  }
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


.factory('EventService', function() {

var eventData = angular.fromJson(window.localStorage.getItem('eventData'));
console.log(eventData);
  return {
    all: function() {
      return eventData;
    },
    vipText: function(detail) {
	var correctDetail = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "vipText") correctDetail = record;
    });
      
      return correctDetail;
    },
    mainEventText: function(detail) {
	var correctDetail = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "mainEventText") correctDetail = record;
    });
      
      return correctDetail;
    },
    speakerText: function(detail) {
	var correctDetail = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "speakerText") correctDetail = record;
    });
      
      return correctDetail;
    },
    year: function(detail) {
	var year = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "year") correctDetail = record;
    });
      
      return correctDetail;
    },
    auctionCloseText: function(detail) {
	var correctDetail = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "auctionCloseText") correctDetail = record;
    });
      
      return correctDetail;
    },
    endEventText: function(detail) {
	var correctDetail = [];
    angular.forEach(eventData, function(record) {
      if (record.description == "endEventText") correctDetail = record;
    });
      
      return correctDetail;
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
