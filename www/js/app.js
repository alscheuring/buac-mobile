
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
    



//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pagebeforeshow", "#info-page", function () {
 
   //Go get the JSON from the site     
   //empty out li
  var info = JSON.parse(window.localStorage.getItem("brewers"));

    var li = "";
    //step through info and add to li
    $.each(info, function (i, name) {
        li += '<li><a href="#brewer-detail" id="' + i + '" class="info-go"  ontouchstart="sessionStorage.ParameterID='+ name.Brewer.id +'"><h3>' + name.Brewer.name + '</h3><p><strong>' + name.Brewer.brewery + '</strong></p></a></li>';
    });
    //append list to ul
    $("#brewerList").append(li).promise().done(function () {
        $(this).listview("refresh");
});
});

//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#brewer-detail", function () {

	var info_view = "";
	var brewerid = sessionStorage.ParameterID;
    var beers = JSON.parse(window.localStorage.getItem("brewers"));
         	
    $.each(beers, function (i, info) {
        if(info.Brewer.id == brewerid){
        	
            info_view += '<div class="detailBanner">';
		    info_view += '<h3>' + info.Brewer.name +'</h3>';
		    info_view += '<h4><i>' + info.Brewer.brewery +'</i></h4>';
   
   		  if(info.Brewer.untappd_id){
            info_view += '<a href="untappd:///?brewery='+ info.Brewer.untappd_id +'" target="_blank" data-rel="popup" data-role="button" data-inline="true" data-mini="true" data-transition="pop">Checkin on UNTAPPD</a>';
			}
		    info_view += '</div>';

			var info_view2 = "";
		     info_view2 += '<p>' + info.Brewer.story +'</p>';
		     
			var info_view3 = "";
			    var li = "";
		
		    $.each(info.Beer, function (i, name) {
		       li += '<li><a href="#beer-detail" id="' + i + '" class="info-go"  ontouchstart="sessionStorage.ParameterID='+ name.id +'"><h3>' + name.name + '</h3></a></li>';
		    });
    
   
    
	$("#brewerDetailDiv").html(info_view);
         	
	$("#brewerStory").html(info_view2);
    $("#brewerBeers").html(li).promise().done(function () {
        $(this).listview("refresh");
    });	
    }
    });
    	
        $(this).find("[data-role=content]").html(brewerDetailDiv);	

});


//pageinit event for first of two pages
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pagebeforeshow", "#beerStyles", function () {
  // 	alert(window.localStorage.getItem(beers));
    // $.getJSON('http://brewingupacure.org/Beers/index.json', function(info) {
    //set up string for adding <li/>
  
  var info = JSON.parse(window.localStorage.getItem("beers"));
    var li = "";
    //container for $li to be added
    $.each(info, function (i, name) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        var brewerName = name.Brewer.brewery;
        if(name.Brewer.brewery == 'Homebrewer'){brewerName = name.Brewer.name;}
        //console.log(name.Beer);
        li += '<li><a href="#beer-detail" id="' + i + '" class="info-go" ontouchstart="sessionStorage.ParameterID='+ name.Beer.id +'"><h3>' + name.Beer.name + '</h3><p><i>'+ name.Beer.style +' by '+ brewerName + '</i></p></a></li>';
    });
    //append list to ul
    $("#beerList").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        //refresh list to enhance its styling.
        $(this).listview("refresh");
   // });
});
});



//BEER DETAIL PAGE////////////////////////////////
$(document).on("pagebeforeshow", "#beer-detail", function () {
	
   	    var info_view = "";
		var beerID = sessionStorage.ParameterID;
  	    var beers = JSON.parse(localStorage.getItem('beers'));

    $.each(beers, function (i, info) {
        if(info.Beer.id == beerID){
               
        var brewerName = info.Brewer.brewery;
        if(info.Brewer.brewery == 'Homebrewer'){brewerName = info.Brewer.name;}
	
		    info_view += '<div class="detailBanner">';
		    info_view += '<h2>' + info.Beer.name +'</h2>';
		    info_view += '<p><i>' + info.Beer.style +'</i></p>';
		  
		  if(info.Beer.og ){
		    info_view += '<a href="#ogDescription" data-rel="popup" data-role="button" data-inline="true" data-mini="true" data-transition="pop">OG: '+ info.Beer.og +'</a>';
		  }
		  
		  if(info.Beer.abv ){
		    info_view += '<a href="#abvDescription" data-rel="popup" data-role="button" data-inline="true" data-mini="true" data-transition="pop">ABV: '+ info.Beer.abv +'</a>';
		  }
		  
		  if(info.Beer.ibu ){
		    info_view += '<a href="#ibuDescription" data-rel="popup" data-role="button" data-inline="true" data-mini="true" data-transition="pop">IBU: '+ info.Beer.ibu +'</a>';
		  }
		  
	

		  
		  if(info.Beer.untappd_id){
		  	  info_view += '<a href="untappd:///?beer='+ info.Beer.untappd_id +'" target="_blank" data-rel="popup" data-role="button" data-inline="true" data-mini="true" data-transition="pop">Checkin on UNTAPPD</a>';

		  	
		  }
		  
		  		  
		    info_view += '<a href="#brewer-detail" data-role="button" data-mini="true" ontouchstart="sessionStorage.ParameterID='+ info.Brewer.id +'">by ' + brewerName +'</a>';
		    info_view += '</div>';
		    info_view += '<p>' + info.Beer.description +'</p>';
	    
		    }
		    });
    //add this to html
    $("#beerDetailDiv").html(info_view);
    $("#beerDetailDiv").trigger("create");

    
//	});
});
/////////////////////////////////////////////////////////
