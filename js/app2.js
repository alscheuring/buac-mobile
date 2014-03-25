
function getBeers(){
    var buacurl = "http://brewingupacure.org/Beers/index.json";
    $.getJSON(buacurl, function(data){
    var beers = JSON.stringify(data);
    window.localStorage.setItem('beers', beers);

});
}

function getBrewers(){
	
    var buacurl = "http://brewingupacure.org/Brewers/index.json";
    $.getJSON(buacurl, function(data){
    var brewers = JSON.stringify(data);
  ///  intel.xdk.cache.setCookie("beers",beers,"-1");
    window.localStorage.setItem('brewers', brewers);

});
}



