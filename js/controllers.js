angular.module('starter.controllers', [])

    .controller('VoteCtrl', ['$scope', function($scope, $http) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        
        
      };


  
    }])
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





.controller('HomeCtrl', function($scope, DataService) {
	//console.log("Home controller");
	ionic.Platform.ready(function(){
         navigator.splashscreen.hide();
    
            //$scope.beerVote = true;
  //$scope.beerVote = VoteService();
  //$scope.beerVote = true;
//$scope.beerVote = VoteService();   
//console.log($scope.beerVote);
//    $scope.beerVote = true;

});
	
})


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



// A simple controller that fetches a list of data from a service
.controller('BrewerIndexCtrl', function($scope, BrewerService) {
  $scope.brewers = BrewerService.all();
         
})


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




// A simple controller that shows a tapped item's data
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService, $ionicPopup, $location, $http) {
  $scope.beer = BeerService.get($stateParams.beerId);
  console.log($stateParams.beerId);
  
 var spigotVote = JSON.parse(window.localStorage.getItem("spigotVote"));
//console.log("Getting spigotVote right in the controller");
//console.log(spigotVote.vote.Vote.beer_id);

///NEED to use spigotVote here. localStorage needs to provide checkbox
   var device = ionic.Platform.device();
  if (spigotVote.vote.Vote.beer_id === $stateParams.beerId){
        // console.log("we got a match yo");
         $scope.beerVote = true;
     
  }else{ $scope.beerVote = false }
  
    $scope.go = function ( path ) {
  	//console.log(path);
  $location.path( path );
	};  


	
  $scope.vote = function() {
      
      //Need to unset the localStorage variable so checkboxes don't show on multiple beers.
      //
      //This will probably all work but a damn empty record is getting created for some reason.
//console.log("Getting BeerID during the vote from localStorage");
var spigotVote = JSON.parse(window.localStorage.getItem("spigotVote"));
//console.log(spigotVote.vote.Vote.beer_id);

//console.log("Setting the beerID to current ID");
spigotVote.vote.Vote.beer_id = $stateParams.beerId; 
//console.log(spigotVote.vote.Vote.beer_id);

//console.log("setting new localStorage");
      	var newSpigotVote = angular.toJson(spigotVote);
      	window.localStorage.setItem("spigotVote", newSpigotVote);
 
 //       console.log(spigotVote3);
        
  //Set the current beer as the favorite for the night. This updates Mysql on the backend but not localStorage.   
  $http.post('http://brewingupacure.org/Votes/add.json',{id:device.uuid, beer_id:$stateParams.beerId }).then(function(resp) {
  //  console.log('Success', resp); 
    // For JSON responses, resp.data contains the result
  }, function(err) {
    //console.error('ERR', err);
    // err.status will contain the status code
  });  
  
     
  }; 	
	
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


