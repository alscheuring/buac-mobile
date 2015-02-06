angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, DataService) {
	//console.log("Home controller");
	ionic.Platform.ready(function(){
         navigator.splashscreen.hide();
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

    //Get the votes so we can show a checkbox on the list
     var myVote = angular.fromJson(window.localStorage.getItem("myVote"));
     $scope.myVote = myVote;
     console.log(myVote);

    var triedBeers = angular.fromJson(window.localStorage.getItem("triedBeers"));
    console.log('TRIED BEERS');
    console.log(triedBeers);
    $scope.triedBeers = triedBeers;
//console.log($scope.beerVote.Vote.beer_id);
})


// A simple controller that shows a tapped item's data
.controller('BrewerDetailCtrl', function($scope, $stateParams, BrewerService,$rootScope) {
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
})




// A simple controller that shows a tapped item's data
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService, $ionicPopup, $location, $http,$rootScope) {
  $scope.beer = BeerService.get($stateParams.beerId);
    
  //The specific beerID
  $scope.beerID = $stateParams.beerId;
  
////SET THE VOTE CHECKBOX  
   var myVote = JSON.parse(window.localStorage.getItem("myVote"));
   if (myVote.Vote.beer_id === $stateParams.beerId){
//        console.log("we got a match yo");
         $scope.beerVote = true;
          }else{ $scope.beerVote = false }
/////////////////////
///////SET the TRIED IT CHECKBOX///////
    var triedBeers = JSON.parse(window.localStorage.getItem("triedBeers"));
    $scope.triedIt = false;
      angular.forEach(triedBeers, function(tried, index) {
          console.log(tried.Tried.beer_id);
       if (tried.Tried.beer_id == $scope.beerID){
          console.log("TRIED IS ");
          console.log(tried);
          $scope.triedIt = true;
       }


    });
//    if(savedBeer.Tried.beer_id = $scope.beerID){
//        $scope.triedIt = true;
//    }else{ $scope.triedIt = false;}
//       console.log("SAVED BEER IS");
//           console.log(savedBeer);    
///////////////////////////////
      

  
    $scope.go = function ( path ) {
  	//console.log(path);
  $location.path( path );
	};  

//TRIED THIS BEER FUNCTION///////
//
//

$scope.tried = function(beerID){
  console.log('DEVICE ID'); 
  console.log($rootScope.DEVICEID);
  
    var triedItTest = false;
    if($scope.triedIt === true){ triedItTest = 'true';};
    if($scope.triedIt === false){ triedItTest = 'false';};
  //Set the current beer as the favorite for the night. This updates Mysql on the backend but not localStorage.
  //If $scope.beerVote is false, the backend server will delete the beer_id from the record, if true it will  the record.
  $http.post('http://brewingupacure.org/Tried/add.json',{device_id:$rootScope.DEVICEID, beer_id:$stateParams.beerId, insertRecord: triedItTest }).then(function(resp) {
  
      //Get the localStorage Variable
      $scope.triedBeers = angular.fromJson(window.localStorage.getItem('triedBeers'));
//   
//   
      //If they are checking the box, save the new record in the localStorage array.
      if($scope.triedIt === true){
            var newTriedBeer =  { Tried: 
            { device_id: $rootScope.DEVICEID,
              beer_id: $stateParams.beerId
              } };
        $scope.triedBeers.push(newTriedBeer);
        window.localStorage.setItem('triedBeers', angular.toJson($scope.triedBeers));
      }
      
      if($scope.triedIt === false){
      
      
      
      
//      var thisTriedBeer;
  //    console.log(triedBeers);
      angular.forEach($scope.triedBeers, function(tried, index) {
    //      console.log(tried);
       if (tried.Tried.beer_id == beerID){
          console.log("TRIED IS ");
          console.log(tried.Tried);
              
              console.log("INDEX IS ");
          console.log(index);
               $scope.triedBeers.splice(index, 1);
       }
    });
    console.log($scope.triedBeers);

      }
      
      //Set the localstorage variable
  
  
  
//  //If $scope.beerVote is true, set the localStorage variable
//   if($scope.beerVote == true){
//   var newSpigotVote =  { Vote: 
//   { id: device.uuid,
//     beer_id: $stateParams.beerId
//     } };
//   }
//   if($scope.beerVote == false){
//   var newSpigotVote =  { Vote: 
//   { id: device.uuid,
//     beer_id: ''
//     } };       
//   }
    //Set localstorage to whatever the newSpigotVote became
    //window.localStorage.setItem("triedBeers", angular.toJson(newSpigotVote));
    
//    console.log("saved myVote is now");
//    console.log(angular.toJson(newSpigotVote));
  }, function(err) {
    //console.error('ERR', err);
    // err.status will contain the status code
  });
  }; 



//
//
//
//
//
//
//END TRIED THIS BEER
//
//
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
  $http.post('http://brewingupacure.org/Votes/add.json',{id:$rootScope.DEVICEID, beer_id:$stateParams.beerId, insertRecord: beerVoteTest }).then(function(resp) {
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


