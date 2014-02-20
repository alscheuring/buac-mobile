/*$(document).bind("mobileinit", function() {
      $.mobile.defaultPageTransition = 'none';
      $.mobile.defaultDialogTransition = 'none';
      $.mobile.useFastClick = true;

});*/
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
   defaultPageTransition: 'none'
  });
});

//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pagebeforeshow", "#info-page", function () {
 
   //Go get the JSON from the site     
    $.getJSON('http://brewingupacure.org/Brewers/index.json', function(info) {
   //empty out li
    var li = "";
    //step through info and add to li
    $.each(info, function (i, name) {
        li += '<li><a href="#brewer-detail" id="' + i + '" class="info-go"  onclick="sessionStorage.ParameterID='+ name.Brewer.id +'"><h3>' + name.Brewer.name + '</h3><p><strong>' + name.Brewer.brewery + '</strong></p></a></li>';
    });
    //append list to ul
    $("#brewerList").append(li).promise().done(function () {
        $(this).listview("refresh");
    });
});
});

//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#brewer-detail", function () {

	var info_view = "";
	var brewerid = sessionStorage.ParameterID;
	var buacurl = 'http://brewingupacure.org/Brewers/view/'+ brewerid + '.json';
    $.getJSON(buacurl, function(info) {
         	
       
    info_view += '<div class="detailBanner">';

    info_view += '<h2>' + info.Brewer.name +'</h1>';
    info_view += '<h3>' + info.Brewer.brewery +'</h2>';
        info_view += '</div>';

    info_view += '<p>' + info.Brewer.story +'</p>';

	$("#brewerDetailDiv").html(info_view);
         	
         });
   
    	
        $(this).find("[data-role=content]").html(brewerDetailDiv);	

});


//pageinit event for first of two pages
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pagebeforeshow", "#beerStyles", function () {
     $.getJSON('http://brewingupacure.org/Beers/index.json', function(info) {
    //set up string for adding <li/>
    var li = "";
    //container for $li to be added
    $.each(info, function (i, name) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        var brewerName = name.Brewer.brewery;
        if(!name.Brewer.brewery){brewerName = name.Brewer.name;}
        //console.log(name.Beer);
        li += '<li><a href="#beer-detail" id="' + i + '" class="info-go" onclick="sessionStorage.ParameterID='+ name.Beer.id +'"><h3>' + name.Beer.name + '</h3><p><i>'+ name.Beer.style +' by '+ brewerName + '</i></p></a></li>';
    });
    //append list to ul
    $("#beerList").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});
});



//BEER DETAIL PAGE////////////////////////////////
$(document).on("pagebeforeshow", "#beer-detail", function () {
	
    //get from data - you put this here when the "a" wa clicked in the previous page
    //string to put HTML in
    //use for..in to iterate through object
   	    var info_view = "";
		var beerID = sessionStorage.ParameterID;
   		console.log(beerID);
 		var buacurl = 'http://brewingupacure.org/Beers/view/'+ beerID + '.json';

         $.getJSON(buacurl, function(info) {
         console.log(info);
        var brewerName = info.Brewer.brewery;
        if(!info.Brewer.brewery){brewerName = name.Brewer.name;}

    info_view += '<div class="detailBanner">';

    info_view += '<h1>' + info.Beer.name +'</h1>';
    info_view += '<h2>' + info.Beer.style +'</h2>';
    
    info_view += '<a href="#brewer-detail" class="info-go" onclick="sessionStorage.ParameterID='+ info.Brewer.id +'"><h3> by ' + brewerName +'</h3></a>';
        info_view += '</div>';

    
    info_view += '<p>' + info.Beer.description +'</p>';
    //add this to html
    $("#beerDetailDiv").html(info_view);

    
	});
});
/////////////////////////////////////////////////////////
