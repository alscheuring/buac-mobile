angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, DataService) {
	//console.log("Home controller");
})


// A simple controller that fetches a list of data from a service
.controller('BrewerIndexCtrl', function($scope, BrewerService) {
  // "Pets" is a service returning mock data (services.js)
  //var beers = $http.get('http://brewingupacure.org/Beers/index.json').success(successCallback);
  $scope.brewers = BrewerService.all();
})


// A simple controller that shows a tapped item's data
.controller('BrewerDetailCtrl', function($scope, $stateParams, BrewerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.brewer = BrewerService.get($stateParams.brewerId);
  $scope.beers = $scope.brewer.Beer;
	//console.log($scope.beers);
  
})


// A simple controller that fetches a list of data from a service
.controller('BeerIndexCtrl', function($scope, BeerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beers = BeerService.all();
})



// A simple controller that shows a tapped item's data
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService, $ionicPopup, $location) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beer = BeerService.get($stateParams.beerId);
  $scope.go = function ( path ) {
  	console.log(path);
  $location.path( path );
	};  

	$scope.iPhone = 'no';
    if(device.platform =='iPhone' || device.platform == 'iOS'){
	$scope.iPhone = 'yes';
	}
	
	
	
  $scope.untappdLaunch = function(beerId){
  var device = ionic.Platform.device();
  
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
	

		
  }//End untappd launch
  
  
  $scope.ibuDetail = function(){
	$ionicPopup.alert({
		title: 'International Bitterness Units (IBU)',
		content:'This is a measure of the actual bitterness of a beer as contributed by the alpha acid from hops. Because the apparent bitterness of a beer is subjective to the taste of the drinker and the balancing malt sweetness of the beer this is not always an accurate measure of the "hoppiness" of a beer. But, generally speaking, beers with IBUs of less than 20 have little to no apparent hops presence. Beers with IBUs from 20 to 45 are the most common and have mild to pronounced hops presence. Beers with IBUs greater than 45 are heavily hopped and can be quite bitter.', 
		okText: 'Now I Know...',
		okType: 'button-energized'
	});
  }
  

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


