angular.module('starter.controllers', [])

/*
 * 
 Not sure if this is used anymore.
 */
.controller('VoteCtrl', ['$scope', function($scope, $http) {
      $scope.master = {};
      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };
    }])

/*
 * 
 Not sure if this is used anymore
 */
.controller('VoteCtrl2', function($scope, $http) {
  $scope.vote = function() {
console.log($scope.isChecked);
console.log(device.uuid);
 $http.post('http://brewingupacure.org/Votes/add.json',{id:device.uuid, beer_id:'83' }).then(function(resp) {
    console.log('Success', resp); 
    // For JSON responses, resp.data contains the result
    
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });  
  }; 
})

/*
 * 
//Home controller which uses the DataService. Dataservice pulls all the server info
//and puts it into localstorage
 * 
 */
.controller('HomeCtrl', function($scope, DataService) {
	ionic.Platform.ready(function(){
         navigator.splashscreen.hide(); 

         
});
})

/*
 * 
 Brewer Index controller which lists all the brewers and their beers.
 Uses the BrewerService which pulls data from localStorage so as not to constantly be pinging the server.
 * 
 */

.controller('BrewerIndexCtrl', function($scope, BrewerService,$rootScope) {
//    console.log("good day fucker " + $rootScope.DEVICEID);
//     var device = ionic.Platform.device();
//     var deviceID = device.uuid;
     $scope.brewers = BrewerService.all();
    //Get the votes so we can show a checkbox on the list
   //  $scope.beerVote = JSON.parse(window.localStorage.getItem("myVote"));
//    
//    var triedBeers = JSON.parse(window.localStorage.getItem("triedBeers"));
//    //convert triedBeers to array
//    var array = [];
//    angular.forEach(triedBeers, function(tried) {
//       if(tried.Tried.device_id === deviceID) array.push(tried.Tried.beer_id);
//    });
//    $scope.triedBeers = array;

//arrayconsole.log($scope.triedBeers);
})

/*
 * 
About Controller which shows all the general information.
 */
.controller('AboutCtrl', function($scope, SponsorService, EventService) {
	//console.log("About controller");
	
	$scope.monetarySponsors = SponsorService.monetary();
	$scope.commercialBeers = SponsorService.commercialBeers();
	$scope.foods = SponsorService.foods();
	
	$scope.vipText = EventService.vipText();
	$scope.mainEventText = EventService.mainEventText();
	$scope.speakerText = EventService.speakerText();
	$scope.auctionCloseText = EventService.auctionCloseText();
	$scope.endEventText = EventService.endEventText();
	$scope.year = EventService.year();
})
// A simple controller that shows a tapped item's data
.controller('SponsorDetailCtrl', function($scope, $stateParams, SponsorService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.sponsor = SponsorService.get($stateParams.sponsorId);
  
})


/*
 * 
 * BrewerDetail handles showing the Brewer Information
 */

// A simple controller that shows a tapped item's data
.controller('BrewerDetailCtrl', function($scope, $stateParams, BrewerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.brewer = BrewerService.get($stateParams.brewerId);
  $scope.beers = $scope.brewer.Beer;
  var brewerID = $scope.brewer.Brewer.id;
  // console.log($scope.brewer.Brewer.untappd_id);
  var device = ionic.Platform.device();
    $scope.iPhone = 'no';
    if(device.platform ==='iPhone' || device.platform === 'iOS'){
	$scope.iPhone = 'yes';
	}
        
 $scope.untappdLaunch = function(brewerID){
  var device = ionic.Platform.device();

	if(device.platform ==='iPhone' || device.platform ==='iOS'){
		var thing = "untappd:///?brewery=" + brewerID;
	window.location.href = thing;
	}
  
	//Android Launch
	if(device.platform =='Android'){
		//console.log("android untappd launch");
	window.plugins.webintent.startActivity({
      action: window.plugins.webintent.ACTION_VIEW,
      url: 'untappd:///?brewery=' + brewerID ,
    },
    function() {},
    function() {
      alert('Failed to open URL via Android Intent.');
    }
	);
	} //Android Launch 
	

		
  };//End untappd launch
          
	//console.log($scope.beers);
})


/*
 * 
 * Beer Detail handles showing the Beer information
 */
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService, $ionicPopup, $location, $http) {
     var device = ionic.Platform.device();
     var deviceID = device.uuid;
     
    $scope.beer = BeerService.get($stateParams.beerId);
  var spigotVote = JSON.parse(window.localStorage.getItem("myVote"));
   if (spigotVote.Vote.beer_id === $stateParams.beerId){        
         $scope.beerVote = true;
        }else{ $scope.beerVote = false }
    
    
    var triedBeers = JSON.parse(window.localStorage.getItem("triedBeers"));
// 
      
    //convert triedBeers to array
    var triedBeer = '';
    angular.forEach(triedBeers, function(tried) {
       if(tried.Tried.device_id === deviceID && tried.Tried.beer_id == $stateParams.beerId) triedBeer = tried.Tried.beer_id;
    });
//  var triedIt = JSON.parse(window.localStorage.getItem("myVote"));
   if (triedBeer === $stateParams.beerId){        
         $scope.triedIt = true;
        }else{ $scope.triedIt = false }
    
    
    
    $scope.go = function ( path ) {
    $location.path( path );
   };  


//VOTING FUNCTION for BEST OF SHOW///////////////////
//*************************************************//
  $scope.vote = function() {
    var device = ionic.Platform.device();
    console.log('vote called for ' + $stateParams.beerId);
    console.log("scope.beerVote is now " + $scope.beerVote);
    var beerVoteTest = false;
    if($scope.beerVote === true){ beerVoteTest = 'true';};
    if($scope.beerVote === false){ beerVoteTest = 'false';};
  //Set the current beer as the favorite for the night. This updates Mysql on the backend but not localStorage.
  //If $scope.beerVote is false, the backend server will delete the beer_id from the record, if true it will  the record.
  $http.post('http://brewingupacure.org/Votes/add.json',{id:device.uuid, beer_id:$stateParams.beerId, insertRecord: beerVoteTest }).then(function(resp) {
    //Set the localstorage variable
  
  //If $scope.beerVote is true, set the localStorage variable
   if($scope.beerVote == true){
   var newSpigotVote =  { Vote: 
   { id: device.uuid,
     beer_id: $stateParams.beerId
     } };
   }
   if($scope.beerVote == false){
   var newSpigotVote =  { Vote: 
   { id: device.uuid,
     beer_id: ''
     } };       
   }
    //Set localstorage to whatever the newSpigotVote became
    window.localStorage.setItem("myVote", angular.toJson(newSpigotVote));
    
    console.log("saved myVote is now");
    console.log(angular.toJson(newSpigotVote));
  }, function(err) {
    //console.error('ERR', err);
    // err.status will contain the status code
  });
  }; 
//END VOTING FUNCTION for BEST OF SHOW///////////////////
//*************************************************// 
//
//
  //TRIED THIS BEER function
  $scope.triedThisBeer = function(triedIt) { 
      console.log(triedIt);
    var device = ionic.Platform.device();
 
  //Set the current beer as the favorite for the night. This updates Mysql on the backend but not localStorage.   
  $http.post('http://brewingupacure.org/Tried/add.json',{device_id:device.uuid, beer_id:$stateParams.beerId }).then(function(resp) {
    //Set the localstorage variable
    
    $scope.triedBeers = JSON.parse(window.localStorage.getItem("triedBeers"));
//      console.log("tried beers");
//      console.log(triedBeers);
      
  var newTriedBeer =  { Tried: 
   { device_id: device.uuid,
     beer_id: $stateParams.beerId,
     } };
     
     $scope.triedBeers.push(newTriedBeer);
    window.localStorage.setItem("triedBeers", angular.toJson($scope.triedBeers));
    
  }, function(err) {
    //console.error('ERR', err);
    // err.status will contain the status code
  });   
  }; 	
    
    var device = ionic.Platform.device();
	$scope.iPhone = 'no';
    if(device.platform ==='iPhone' || device.platform === 'iOS'){
	$scope.iPhone = 'yes';
	}
        
  $scope.untappdLaunch = function(beerId){
  var device = ionic.Platform.device();

	if(device.platform ==='iPhone' || device.platform ==='iOS'){
		var thing = "untappd:///?beer=" + beerId;
	window.location.href = thing;
	}

  
	//Android Launch
	if(device.platform =='Android'){
		//console.log("android untappd launch");
	window.plugins.webintent.startActivity({
      action: window.plugins.webintent.ACTION_VIEW,
      url: 'untappd:///?beer=' + beerId ,
    },
    function() {},
    function() {
      alert('Failed to open URL via Android Intent.');
    }
	);
	} //Android Launch 
	

		
  };//End untappd launch
  
  
  $scope.ibuDetail = function(){
	$ionicPopup.alert({
		title: 'International Bitterness Units (IBU)',
		content:'This is a measure of the actual bitterness of a beer as contributed by the alpha acid from hops. Because the apparent bitterness of a beer is subjective to the taste of the drinker and the balancing malt sweetness of the beer this is not always an accurate measure of the "hoppiness" of a beer. But, generally speaking, beers with IBUs of less than 20 have little to no apparent hops presence. Beers with IBUs from 20 to 45 are the most common and have mild to pronounced hops presence. Beers with IBUs greater than 45 are heavily hopped and can be quite bitter.', 
		okText: 'Now I Know...',
		okType: 'button-energized'
	});
  };
  

  $scope.ogDetail = function(){
	$ionicPopup.alert({
		title: 'Original Gravity (OG)',
		content:'A measure of the fermentable and unfermentable substances in the wort before fermentation. </p><p>OG gives the brewer an idea of the potential alcoholic strength of the final product.',  // message
		okText: 'Now I Know...',
		okType: 'button-energized'
	});
	}
  $scope.abvDetail = function(){
	$ionicPopup.alert({
		title: 'Alcohol by Volume (ABV)',
		content:'A measure of how much alcohol is in an alcoholic beverage and is expressed as a percentage. So, if a 12 ounce bottle of beer is 5% alcohol, that means that there is 0.6 ounces of pure alcohol in that beer.',  // message
		okText: 'Now I Know...',
		okType: 'button-energized'
	});
	}
	
	

  
});
