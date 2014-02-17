//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pageinit", "#info-page", function () {
      $.mobile.defaultPageTransition = 'none';
      $.mobile.defaultDialogTransition = 'none';
      $.mobile.useFastClick = true;
      
          $.getJSON('http://brewingupacure.org/Brewers/index.json', function(info) {
    //set up string for adding <li/>
    var li = "";
    //container for $li to be added
    $.each(info, function (i, name) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        li += '<li><a href="#" id="' + i + '" class="info-go" data-transition="slide"><h3>' + name.Brewer.name + '</h3><p><strong>' + name.Brewer.brewery + '</strong></p></a></li>';
    });
    //append list to ul
    $("#brewerList").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#details-page").data("info", info[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#details-page");
        });

        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});

//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details-page", function () {
    //get from data - you put this here when the "a" wa clicked in the previous page
    var info = $(this).data("info");
    //string to put HTML in
    var info_view = "";
    //use for..in to iterate through object


    
    info_view += '<h2>' + info.Brewer.name +'</h1>';
    info_view += '<h3>' + info.Brewer.brewery +'</h2>';
    info_view += '<p>' + info.Brewer.story +'</p>';

    //add this to html
   // alert(info_view);
    $(this).find("[data-role=content]").html(info_view);
});


});




//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pageinit", "#beerStyles", function () {

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
        if(!name.Brewer.brewery){brewerName = name.Brewer.name}
        li += '<li><a href="#" id="' + i + '" class="info-go"><h3>' + name.Beer.name + '</h3><p><i>'+ name.Beer.style +' by '+ brewerName + '</i></p></a></li>';
    });
    //append list to ul
    $("#beerList").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#beer-detail").data("info", info[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#beer-detail");
        });

        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});


//BEER DETAIL PAGE////////////////////////////////
//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#beer-detail", function () {
    //get from data - you put this here when the "a" wa clicked in the previous page
    var info = $(this).data("info");
    //string to put HTML in
    var info_view = "";
    //use for..in to iterate through object

        var brewerName = info.Brewer.brewery;
        if(!info.Brewer.brewery){brewerName = name.Brewer.name}
    
    info_view += '<h1>' + info.Beer.name +'</h1>';
    info_view += '<h2>' + info.Beer.style +'</h2>';
    info_view += '<a href="#info-page" data-role="button"><h3> by ' + brewerName +'</h3></a>';
    info_view += '<p>' + info.Beer.description +'</p>';
    //add this to html
   // alert(info_view);
    $(this).find("[data-role=content]").html(info_view);
});


});