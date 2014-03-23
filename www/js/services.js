angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('BeerService', function() {

var beers = [
    {
        "Beer": {
            "id": "11",
            "brewer_id": "3",
            "name": "Bad Dog Brown",
            "style": "American Brown Ale",
            "og": "1.054",
            "abv": "5.5",
            "ibu": "40",
            "description": "It seems like a lot of breweries have brown ales with canine associations. I first brewed this when we had a chocolate lab named Max. He was really a good dog but he would cart off some piece of brewing equipment whenever I made this beer, hence the name.\r\n\r\nMalts: Thomas Fawcett Halcyon, CaraMunich, Crystal40, Crystal 60, Chocolate, Victory\r\nHops: Millenium, Amarillo",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "3",
            "name": "Greg Brooks",
            "brewery": "Homebrewer",
            "image": "",
            "imageSmall": "",
            "imageMedium": "",
            "story": "I've been brewing for approximately 14 years now and  I've been brewing mostly ales with the occasional light hybrid or historical beer thrown in for variety. For the past three years I proudly served as the president of T.R.U.B., a title I happily  passed onto my successor this past summer. While my schedule has been busy, I've been brewing more and, hopefully, improving as time goes on. Thanks for coming tonight and  please enjoy the beers.",
            "slug": "Greg-Brooks",
            "untappd_id": "",
            "created": "2013-11-30 18:45:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "2",
            "brewer_id": "1",
            "name": "Banana Bread Ale",
            "style": "Specialty\/Fruit",
            "og": "1.044",
            "abv": "3.4",
            "ibu": "14.7",
            "description": "Over ten pounds of bananas were used in brewing this beer. Nutmeg, cinnamon sticks and vanilla bean infused rum were used to re-create traditional banana bread spicing. Biscuit malt and a little bit of dark roast helps put the oven baked goodness in your glass.\r\n\r\nMalt: Maris Otter, Wheat, Biscuit, Flaked Oats, Caramei40L and 120L, Black Patent, Special B\r\nHops: Northern Brewer (bittering), Styrian Goldings\r\nSpecial Ingredients: Roasted\/Fresh Bananas and peels, cinnamon sticks, toasted whole nutmeg and\r\nvanilla bean infused spiced rum.",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "1",
            "name": "Gregor Bender",
            "brewery": "Soul Bender Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-130x116-529b3a322588d-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-300x268-529b3a3253510-medium.png",
            "story": "I have been brewing on and  off for over a decade, but  became much more serious a year and  a half ago  when  I    joined TRUB. My first big solo project was brewing 2 beers and 2 ciders for my wedding, which luckily, turned out  well.  My wife has recently joined in on the fun and had a hand in the formulation and production of these brews. We enjoy using novel ingredients in creative ways, which is reflected in our beers that you are going to sample today. \r\n\r\nProst!\r\n",
            "slug": "Gregor-Bender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "3",
            "brewer_id": "1",
            "name": "Beet Dust",
            "style": "American Pale Ale\/Specialty",
            "og": "1.061",
            "abv": "6.7",
            "ibu": "36.7",
            "description": "This beer is a spin off ofThree Floyds 'Zombie Dust'. Due to the surplus of beets in our garden this summer, we decided to try them in a beer. The citrus character of the hops is balanced with the classic culinary combination of beets and sage.\r\n\r\nMalt: Pale 2 Row, Carahell, Caramei40L\r\nHops: Amarillo, Citra\r\nSpecial: Roasted garden beets, culinary sage, clary sage, English lavender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "1",
            "name": "Gregor Bender",
            "brewery": "Soul Bender Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-130x116-529b3a322588d-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-300x268-529b3a3253510-medium.png",
            "story": "I have been brewing on and  off for over a decade, but  became much more serious a year and  a half ago  when  I    joined TRUB. My first big solo project was brewing 2 beers and 2 ciders for my wedding, which luckily, turned out  well.  My wife has recently joined in on the fun and had a hand in the formulation and production of these brews. We enjoy using novel ingredients in creative ways, which is reflected in our beers that you are going to sample today. \r\n\r\nProst!\r\n",
            "slug": "Gregor-Bender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "14",
            "brewer_id": "4",
            "name": "Belgium Strong Winter",
            "style": "Belgian Strong Ale",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "Patterned after some of Belgium's most unique and famous ales, This is a beer that looks innocent in the glass but packs a delicious wallop. TYhe secret is a high percentage of sugar, and easily fermentable sugar that ratchets up the beer's strength while keeping the body light and easy to drink. Smooth mouthfeel, sweet floral maltiness, and rich spiciness from hops and yeast and with cinnamon, nutmeg, and all-spice to give you a Christmassy taste",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "4",
            "name": "Terry Denham",
            "brewery": "KeggleBrewing.com",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am the oldest member of TRUB and was also one of the first officers of the club as well. I began brewing a good many years ago after receiving a beer brewing kit as a Christmas present from my wife, Patty.  After designing and building multiple additions to my brewing equipment inventory, I have amassed a great deal of experience and brewing knowledge. In April of 2009, my 'hobby' has now been developed and incorporated into an on-line business named Keggle Brewing, Inc.  You can view my website by going to www.kegglebrewing.com. I am honored to be a part of TRUB and their involvement with the Cystic Fibrosis Foundation. Our group spends many hours helping the Foundation in honor of Sadie Terrick. Please enjoy my beers and this wonderful event.\r\n\r\n",
            "slug": "Terry-Denham",
            "untappd_id": "",
            "created": "2013-11-30 18:56:07",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "43",
            "brewer_id": "10",
            "name": "Bitter Bastard",
            "style": "Extra Special Bitter",
            "og": "1.053",
            "abv": "5.3",
            "ibu": "41",
            "description": "English 2-row pale malt, crystal 20 (5%), crystal 120 (2%). First gold hops. British ale (dry) yeast, I think this beer is all about tasting the hop. It is a very earthy hop, maybe something herbal I can't describe, but that's the hop you taste. This beer changes as you take a few sips. First the hops assert themselves above all else, then the palate filter them out a bit and the malt come through, balancing it out a bit more. This is my drink a lot beer. Once I get started it is really hard to stop at one. I like the firm bitterness, without any harshness. I also like the british hop flavor, which is tough to find in pale ales and IPAs commercially, with their lovely grapefruit, pine notes. Cheers and imagine yourself in a nice dark, woody, smoky pub with darts in the background.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "10",
            "name": "Dave Roarty",
            "brewery": "BFD Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I love beer.  By homebrewing I get  to make the classic beers, which I love, they  way I like them. Every homebrewer seems to have their own reasons, but all seem to love beer.  Enough  about love, drink up!",
            "slug": "dave-roarty-bfd-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:12:09",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "35",
            "brewer_id": "9",
            "name": "Brown Ale",
            "style": "Brown Ale",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "This is the basis for our british series. There are no tricks here; just a nice session beer for everybody to enjoy.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "13",
            "brewer_id": "4",
            "name": "Buddy's Pumpkin Spice Ale",
            "style": "Specialty Ale",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "Imagine a pumpkin vine wound its way in a field of barley, and a brewer harvested it all to make a beer. Add Northwestern hops and a blend of spices, and you've got Buddy's Pumpkin spiced Ale .. The malt combination provides a smooth body and slightly sweet flavor, which balances perfectly with the earthy notes derived from the pure pumpkin. Buddy's Pumpkin is Unfiltered.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "4",
            "name": "Terry Denham",
            "brewery": "KeggleBrewing.com",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am the oldest member of TRUB and was also one of the first officers of the club as well. I began brewing a good many years ago after receiving a beer brewing kit as a Christmas present from my wife, Patty.  After designing and building multiple additions to my brewing equipment inventory, I have amassed a great deal of experience and brewing knowledge. In April of 2009, my 'hobby' has now been developed and incorporated into an on-line business named Keggle Brewing, Inc.  You can view my website by going to www.kegglebrewing.com. I am honored to be a part of TRUB and their involvement with the Cystic Fibrosis Foundation. Our group spends many hours helping the Foundation in honor of Sadie Terrick. Please enjoy my beers and this wonderful event.\r\n\r\n",
            "slug": "Terry-Denham",
            "untappd_id": "",
            "created": "2013-11-30 18:56:07",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "33",
            "brewer_id": "8",
            "name": "Chocolate Imperial Stout",
            "style": "Chocolate Stout",
            "og": "",
            "abv": "12",
            "ibu": "24",
            "description": "I wanted to make another attempt at this beer this year. I made it for last year's event but feel it was a little too young and needed some time to age so this year I brewed it much sooner. I start with a stout style recipe but also amped up the chocolate malts plus used Belgian chocolate and milk sugar during the boil and also use cacao\"nibs\" and a little vanilla extract during secondary fermentation to hopefully provide a fairly strong chocolate aroma and taste with some good sweetness. I am attempting to ramp up both the chocolate flavor and aroma and also the alcohol o\/o again this year. My goal is to closely match a favorite of mine Southern Tier's Choklat. At 12% ABV and 24 IBUs this beer will hopefully appease the chocolate lover in all of us but will be a huge beer!",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "8",
            "name": "Jeff Paul",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am starting my 8th year of homebrewing. When I am consuming beer I really like IPAs and  Belgians but I like to brew all styles. I also really enjoy the  many different seasonal beers that come out this time of year from the Pumpkin Ales, Oktoberfest then leading into the Christmas beers as well. I brew 5 gallon batches using the \"all grain\" method and keg my beers.  When I am not brewing beer I am an IT Consultant and avid bike racer (both road and  mountain).",
            "slug": "jeff-paul",
            "untappd_id": "",
            "created": "2013-12-01 08:04:46",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "29",
            "brewer_id": "7",
            "name": "Cow Tipper",
            "style": "Milk Stout w\/Coconut",
            "og": "1.061",
            "abv": "5.5",
            "ibu": "24",
            "description": "And here we sit without opposable thumbs...\r\n\r\nMalts: Mari Otter, Chocolate, Crystal 60 & 120, Oats, Roasted Barley, Carafa III\r\nHops: Northern Brewer\r\nSpecialty Ingredients: Toasted Flaked Coconut, Black Strap Molasses",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "23",
            "brewer_id": "6",
            "name": "Donkey Kick",
            "style": "Oatmeal Stout",
            "og": "1.065",
            "abv": "8.6",
            "ibu": "28.7",
            "description": "We love creamy rich stouts... this is the result.\r\n\r\nMALTS USED: American 2-row, flaked oats, chocolate malt, black patent.\r\nHOPS: East Kent Goldings",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "39",
            "brewer_id": "9",
            "name": "ESB",
            "style": "Extra Special Bitter",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "This is an Extra Special Bitter. This style of beer should be easy drinking for an entire session. Hops should be very present, but not nearly as strong as in an IPA. There is not any chocolate malt in this recipe.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "16",
            "brewer_id": "5",
            "name": "Everything My Fat Darling Loves",
            "style": "Imperial Milk Stout",
            "og": "1.075",
            "abv": "8.0",
            "ibu": "16",
            "description": "This beer really satisfies! This is my second attempt at a candy bar stout. A little better than the first. Next years will be even better! Hope you get to try it with some ice cream made by Nosh from Butler PA! \r\n\r\nMALTS USED: 2 row,roasted barley, crystal 1201, crystal 60, chocolate malt, munich, flaked wheat \r\nSPECIALTY INGREDIENTS: Powdered peanut butter, chocolate chips in boil, Lactose sugar\r\nHOPS USED: Magnum, WGV",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "5",
            "name": "Jason Irwin",
            "brewery": "Buster's Brew",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "This is my third year with TRUB and serving at Brewing Up a Cure! I hope to serve at many more in the future! I have been addicted to brewing my own beer for 7 years now and it all started with a Sierra Nevada  Pale Ale clone. I    hope you enjoy all of my home brews as much as I do.  I tried to out do myself this year with different beers! And look for all of my beers on Untappd! Please check  into them!\r\n",
            "slug": "Jason-Irwin-Busters-Brew",
            "untappd_id": "",
            "created": "2013-12-01 07:56:53",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "47",
            "brewer_id": "12",
            "name": "Fahpa-five Acres Harvest Pale Ale",
            "style": "American Pale Ale",
            "og": "1.063",
            "abv": "6.7",
            "ibu": "75",
            "description": "This is a pale ale recipe that I normally only dry hop with my homegrown hops, but this version has all hops straight off the vine this fall.\r\n\r\nMALTS USED: 2-row Pale,Biscuit,brown, Crystai40L\r\nHOPS USED: Centennial, Cascade, Both Straight off of the vine.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "12",
            "name": "Shane Terrick",
            "brewery": "Office Brewing Co.",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I have been brewing for over 10 years now, a lot less now that other things in life take a front seat to my brewing.  Our 9 year old daughter Sadie has Cystic Fibrosis and this event helps fund research to help find a cure for this disease. We really enjoy this event to socialize and talk about beer and  see old friends find a cure for this disease. My family and I would  like to personally thank you for coming and supporting this event and cause.\r\n",
            "slug": "Shane-Terrick-Office-Brewing-Co",
            "untappd_id": "",
            "created": "2013-12-01 08:16:01",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "49",
            "brewer_id": "13",
            "name": "Flat Face IPA",
            "style": "American India Pale Ale",
            "og": "1.061",
            "abv": "6.5",
            "ibu": "80",
            "description": "Named after my Pug since he is always soaking up the sun staring at me while I fumble around with my brewery.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "13",
            "name": "Shane Walters",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I started brewing over 10 years ago with just the basic pot on the kitchen stove, a kit from the local home brew supply shop and some 12oz bottles. Like most home brewers this was just the  beginning...  I currently brew 10 gallon batches fermenting in a 12.5 gallon stainless steel conical.  I commonly have 4 styles on tap  but still cannot find the patience to age some of them  long enough! My most sought after styles are IPAs, German Lagers\/Weissbiers and Belgian ales.\r\n",
            "slug": "shane-walters",
            "untappd_id": "",
            "created": "2013-12-01 08:18:55",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "12",
            "brewer_id": "3",
            "name": "Gratzer\/Grodziske",
            "style": "Smoked Wheat",
            "og": "1.042",
            "abv": "3.9",
            "ibu": "31",
            "description": "This is a style I've been working to working to perfect since I first brewed it for BUAC last year. I've now brewed it three times and I feel like I have a pretty good handle on the style.\r\n\r\nMalts: Best Malz Wheat Malt, Best Malz Pilsner Malt\r\nSpecialty: Oak Smoked Wheat Malt\r\nHops: Crystal",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "3",
            "name": "Greg Brooks",
            "brewery": "Homebrewer",
            "image": "",
            "imageSmall": "",
            "imageMedium": "",
            "story": "I've been brewing for approximately 14 years now and  I've been brewing mostly ales with the occasional light hybrid or historical beer thrown in for variety. For the past three years I proudly served as the president of T.R.U.B., a title I happily  passed onto my successor this past summer. While my schedule has been busy, I've been brewing more and, hopefully, improving as time goes on. Thanks for coming tonight and  please enjoy the beers.",
            "slug": "Greg-Brooks",
            "untappd_id": "",
            "created": "2013-11-30 18:45:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "18",
            "brewer_id": "5",
            "name": "Hail To The King Baby",
            "style": "Saison",
            "og": "1.067",
            "abv": "8.5",
            "ibu": "18",
            "description": "I brewed this beer at Coopers Lake Brewers Fest this year. I thought this was a perfect beer to brew there because I already had my smoker there and there was a lack of temp control- Saisons like to ferment hot!\r\n\r\nMALTS USED: Pilsner, wheat, crystal 601, biscuit\r\nSPECIALTY INGREDIENTS: 5 pounds of sugar pumpking I smoked on my big green egg, brown sugar\r\nHOPS USED: WGV, SAAZ",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "5",
            "name": "Jason Irwin",
            "brewery": "Buster's Brew",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "This is my third year with TRUB and serving at Brewing Up a Cure! I hope to serve at many more in the future! I have been addicted to brewing my own beer for 7 years now and it all started with a Sierra Nevada  Pale Ale clone. I    hope you enjoy all of my home brews as much as I do.  I tried to out do myself this year with different beers! And look for all of my beers on Untappd! Please check  into them!\r\n",
            "slug": "Jason-Irwin-Busters-Brew",
            "untappd_id": "",
            "created": "2013-12-01 07:56:53",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "34",
            "brewer_id": "8",
            "name": "Hefeweizen",
            "style": "Hefeweizen",
            "og": "",
            "abv": "5.2",
            "ibu": "15.2",
            "description": "A truly classic German style wheat beer but with the yeast still present in the beer so you are left with the very typical hazy appearance and the typical banana and clove flavors. As is normal with this style it is very low in hop bitterness as well using only low bittering German noble hops. My recipe parallels a Weihenstephan Hefeweizen which is form the world's oldest working brewery 5.2% ABV and 15.2 IBUs.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "8",
            "name": "Jeff Paul",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am starting my 8th year of homebrewing. When I am consuming beer I really like IPAs and  Belgians but I like to brew all styles. I also really enjoy the  many different seasonal beers that come out this time of year from the Pumpkin Ales, Oktoberfest then leading into the Christmas beers as well. I brew 5 gallon batches using the \"all grain\" method and keg my beers.  When I am not brewing beer I am an IT Consultant and avid bike racer (both road and  mountain).",
            "slug": "jeff-paul",
            "untappd_id": "",
            "created": "2013-12-01 08:04:46",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "28",
            "brewer_id": "7",
            "name": "Hyper-Hypo",
            "style": "English Brown Ale\/Specialty",
            "og": "1.056",
            "abv": "5.5",
            "ibu": "30",
            "description": "Put on your protective helmet and safety harness, because this Brown Ale is going to bring out your inner spaz. Brewed with Kana coffee and chocolate nibs.\r\n\r\nMalts: Maris Otter, Crystal 60, Chocolate, Flaked Oats Hops: Nugget, Goldings\r\nSpecial Ingredients: Kana Coffee, Chocolate Nibs",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "25",
            "brewer_id": "7",
            "name": "Illegal Smile IPA",
            "style": "American IPA\/Fruit Beer",
            "og": "1.065",
            "abv": "7.0",
            "ibu": "60",
            "description": "A west-coast style IPA brewed with some east-coast (Chambersburg, PA to be exact) tree ripened peaches. Served tonight straight up, and 'randalized' through a filter of Multihead hops and peaches. \r\n\r\nMalts: 2-row, Crystal 30, Aromatic, Dextrine\r\nHops: Bravo, Cascade, Centennial, Multihead\r\nSpecial Ingredients: Peaches",
            "untappd_id": "475696",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "40",
            "brewer_id": "9",
            "name": "IPA",
            "style": "English IPA",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "Indian Pale Ale is probably a style you're familiar with. This one has Fuggles and should be a little hoppier than the ESB. Also, floral hop character should be stronger in this ale, since it was dry hopped in secondary fermentation. There is not any chocolate malt in this recipe, either.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "32",
            "brewer_id": "8",
            "name": "Irish Red Ale",
            "style": "Irish Red Ale",
            "og": "",
            "abv": "5.1",
            "ibu": "20",
            "description": "A reddish\/amber ale with a nice malty presence and low hop bitterness. It is a good and easy drinking beer and is relatively low in alcohol. I was going for a style like Smithwick's or Killian's with this beer. The ABV is 5.1% and the IBUs are about 20.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "8",
            "name": "Jeff Paul",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am starting my 8th year of homebrewing. When I am consuming beer I really like IPAs and  Belgians but I like to brew all styles. I also really enjoy the  many different seasonal beers that come out this time of year from the Pumpkin Ales, Oktoberfest then leading into the Christmas beers as well. I brew 5 gallon batches using the \"all grain\" method and keg my beers.  When I am not brewing beer I am an IT Consultant and avid bike racer (both road and  mountain).",
            "slug": "jeff-paul",
            "untappd_id": "",
            "created": "2013-12-01 08:04:46",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "20",
            "brewer_id": "6",
            "name": "Java 13",
            "style": "Coffee Porter",
            "og": "1.046",
            "abv": "5.5",
            "ibu": "36.8",
            "description": "We love beer and we love coffee ... seemed pretty logical\r\n\r\nMALTS USED: American 2 row, black barley, chocolate malt, crystal40\r\nSPECIALTY INGREDIENTS: Coffee\r\nHOPS USED: East Kent Goldings, Fuggels",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "45",
            "brewer_id": "11",
            "name": "Just an IPA",
            "style": "India Pale Ale",
            "og": "1.061",
            "abv": "6.0",
            "ibu": "60",
            "description": "HOPS USED: Columbus, Cascade",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "11",
            "name": "Dana Staudt",
            "brewery": "Stadthaus Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I got into brewing basically because I really dig craft beer. I was intro\u00adduced to craft beer while working as an archaeologist.  My crew chief was one of the investors of Weyerbacher Brewing and while doing field\u00ad work you are constantly traveling.  Each remote little town we'd stop at, we'd hit the local distributor to find local brews to sample and discuss after work. Archaeology also led me out west to Montana, where I spent time traveling the surrounding states and this gave me the opportunity to try a new array of specialty craft beers. Simply the desire to understand more about the complexity  of the various beer styles drove me to try and brew some myself. Still much to learn, but it sure is fun!\r\n",
            "slug": "dana-staudt-stadthaus-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:14:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "10",
            "brewer_id": "3",
            "name": "Kolsch n@",
            "style": "Kolsch",
            "og": "1.052",
            "abv": "5.4",
            "ibu": "24",
            "description": "This beer is a repeat from last year. With only five ingredient this should be a simple beer to make but it never seems to work out that way.  The name came about as a result of a celebratory night with friends at the local bar in Morningside, the Bulldog Pub.\r\n\r\nMalts: Best Malz Heidelberg Malt, Vienna Malt\r\nHops: Sterling\r\n",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "3",
            "name": "Greg Brooks",
            "brewery": "Homebrewer",
            "image": "",
            "imageSmall": "",
            "imageMedium": "",
            "story": "I've been brewing for approximately 14 years now and  I've been brewing mostly ales with the occasional light hybrid or historical beer thrown in for variety. For the past three years I proudly served as the president of T.R.U.B., a title I happily  passed onto my successor this past summer. While my schedule has been busy, I've been brewing more and, hopefully, improving as time goes on. Thanks for coming tonight and  please enjoy the beers.",
            "slug": "Greg-Brooks",
            "untappd_id": "",
            "created": "2013-11-30 18:45:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "42",
            "brewer_id": "10",
            "name": "Leroy",
            "style": "Robust Porter",
            "og": "1.064",
            "abv": "6.6",
            "ibu": "37",
            "description": "US 2-row barley, Crystal40 (9%), Chocolate (350) (6%), Black patent (4%), US Goldings and Fuggles hops, California ale (dry). I named this Leroy because I love the name and think it is a great name for a robust porter (bag carrier). This beer reminds me of dark chocolate, which finishes nice and clean making you want more. Better as it warms a bit. Very easy to drink but beware the buzz, it sneaks up on you. I love this beer with a cigar, it mixes well with the tobacco flavors and keeps the palate clean. First time I have brought this one- another personal favorite (I sip as I write). Another reason I seem to keep going back to British style beers. This one is also young, brewed 8\/24, so still has a bit of yeast in the flavor and nose.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "10",
            "name": "Dave Roarty",
            "brewery": "BFD Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I love beer.  By homebrewing I get  to make the classic beers, which I love, they  way I like them. Every homebrewer seems to have their own reasons, but all seem to love beer.  Enough  about love, drink up!",
            "slug": "dave-roarty-bfd-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:12:09",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "17",
            "brewer_id": "5",
            "name": "My Precious",
            "style": "Wheat Beer",
            "og": "1.047",
            "abv": "4.6",
            "ibu": "17",
            "description": "The third year of bringing this beer to brewing up a cure, this is a crowd favorite! I changed up the hops a little bit this year for more of a fruity background.\r\n\r\nMALTS USED: wheat, 2 row. honey malt\r\nSPECIALTY INGREDIENTS: 2 pounds of honey at flame out\r\nHOPS USED: Legacy",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "5",
            "name": "Jason Irwin",
            "brewery": "Buster's Brew",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "This is my third year with TRUB and serving at Brewing Up a Cure! I hope to serve at many more in the future! I have been addicted to brewing my own beer for 7 years now and it all started with a Sierra Nevada  Pale Ale clone. I    hope you enjoy all of my home brews as much as I do.  I tried to out do myself this year with different beers! And look for all of my beers on Untappd! Please check  into them!\r\n",
            "slug": "Jason-Irwin-Busters-Brew",
            "untappd_id": "",
            "created": "2013-12-01 07:56:53",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "22",
            "brewer_id": "6",
            "name": "North Side Ale",
            "style": "English Mild",
            "og": "1.036",
            "abv": "3.8",
            "ibu": "16.3",
            "description": "We like English mild and figured we would give it a try.\r\n\r\nMALTS USED: English 2 row crystal 80, 120\r\nHOPS: East Kent Goldings",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "38",
            "brewer_id": "9",
            "name": "Oatmeal Stout",
            "style": "Oatmeal Stout",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "Oatmeal was added to this recipe to give a full mouth feel. There is also more chocolate and roasted barley in this recipe than in the porter.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "21",
            "brewer_id": "6",
            "name": "Overlord IPA",
            "style": "American IPA",
            "og": "1.063",
            "abv": "7.5",
            "ibu": "85.3",
            "description": "We stated with a pretty simple IPA recipe and added what thought were some nice hop flavors.\r\n\r\nMALTS USED: American 2 row crystal40\r\nHOPS: Citra, Willamette",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "15",
            "brewer_id": "4",
            "name": "Pirates Honey Pale",
            "style": "Golden Ale",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "A refreshing, lightly hopped golden ale brewed with all-natural honey and made with barley, honey, hops, water and yeast. It is brewed in recognition of our Pirates",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "4",
            "name": "Terry Denham",
            "brewery": "KeggleBrewing.com",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am the oldest member of TRUB and was also one of the first officers of the club as well. I began brewing a good many years ago after receiving a beer brewing kit as a Christmas present from my wife, Patty.  After designing and building multiple additions to my brewing equipment inventory, I have amassed a great deal of experience and brewing knowledge. In April of 2009, my 'hobby' has now been developed and incorporated into an on-line business named Keggle Brewing, Inc.  You can view my website by going to www.kegglebrewing.com. I am honored to be a part of TRUB and their involvement with the Cystic Fibrosis Foundation. Our group spends many hours helping the Foundation in honor of Sadie Terrick. Please enjoy my beers and this wonderful event.\r\n\r\n",
            "slug": "Terry-Denham",
            "untappd_id": "",
            "created": "2013-11-30 18:56:07",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "37",
            "brewer_id": "9",
            "name": "Polano Porter",
            "style": "Specialty Beer",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "This is the same recipe as the Porter, but we added a non-traditional ingredient... poblano peppers. The pepper flavor should stand out i the nose and hit the tongue right off the bat, but don't expect it to linger in your throat. Many people are surprised by how refreshing this beer is.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "24",
            "brewer_id": "6",
            "name": "Poo Flinger",
            "style": "Hefeweizen",
            "og": "1.048",
            "abv": "8.6",
            "ibu": "28.7",
            "description": "We both enjoy the banana aroma and clove of the beer and wanted to try the step mash\r\nprocess, this was a good way to do that!\r\n\r\nMALTS USED: German Wheat\r\nHOPS: Hallertau",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "36",
            "brewer_id": "9",
            "name": "Porter",
            "style": "Porter",
            "og": "",
            "abv": "",
            "ibu": "",
            "description": "To make the porter, some chocolate and roasted barley were added to the grain bill, along with more 2-row to up the gravity.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "4",
            "brewer_id": "1",
            "name": "Prickly Wit",
            "style": "Witbier\/Specialty",
            "og": "1.050",
            "abv": "5.8",
            "ibu": "12.6",
            "description": "For my mom's birthday in November, she requested a beer made with prickly pears, as she likes them in margaritas. This Wit adds lime, tequila, and prickly pears to pay tribute to mom's special drink. Prickly Witarita anyone?\r\n\r\nMalt: Flaked Oats, Flaked Wheat, Malted Wheat, Pale 2 Row\r\nHops: Hallertauer (Hersbrucker)\r\nSpecial Ingredients: Prickly Pear juice, coriander, lime zest, orange zest, lemon zest",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "1",
            "name": "Gregor Bender",
            "brewery": "Soul Bender Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-130x116-529b3a322588d-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-300x268-529b3a3253510-medium.png",
            "story": "I have been brewing on and  off for over a decade, but  became much more serious a year and  a half ago  when  I    joined TRUB. My first big solo project was brewing 2 beers and 2 ciders for my wedding, which luckily, turned out  well.  My wife has recently joined in on the fun and had a hand in the formulation and production of these brews. We enjoy using novel ingredients in creative ways, which is reflected in our beers that you are going to sample today. \r\n\r\nProst!\r\n",
            "slug": "Gregor-Bender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "48",
            "brewer_id": "12",
            "name": "Psuedo Pilsner",
            "style": "Pilsner",
            "og": "1.050",
            "abv": "4.8",
            "ibu": "20",
            "description": "This is my take on a Pilsner but without a lager yeast and the lagering process. I use an american ale yeast fermented at a lower temperature.\r\n\r\nMalts: Pilsner 2-row, Flaked Oats, and Crystal 40L\r\nHops: Columbus, Hallertau",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "12",
            "name": "Shane Terrick",
            "brewery": "Office Brewing Co.",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I have been brewing for over 10 years now, a lot less now that other things in life take a front seat to my brewing.  Our 9 year old daughter Sadie has Cystic Fibrosis and this event helps fund research to help find a cure for this disease. We really enjoy this event to socialize and talk about beer and  see old friends find a cure for this disease. My family and I would  like to personally thank you for coming and supporting this event and cause.\r\n",
            "slug": "Shane-Terrick-Office-Brewing-Co",
            "untappd_id": "",
            "created": "2013-12-01 08:16:01",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "44",
            "brewer_id": "11",
            "name": "Pumped Up Porter ***VIP SESSION***",
            "style": "Bourbon Vanilla Imperial Porter",
            "og": "1.086",
            "abv": "8.0",
            "ibu": "38.1",
            "description": "MALTS USED: Pale, Munich, Brown, Crystal, and Chocolate\r\nHOPS USED: Magnum and East Kent Goldings\r\nSPECIALTY INGREDIENTS: Vanilla beans and bourbon",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "11",
            "name": "Dana Staudt",
            "brewery": "Stadthaus Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I got into brewing basically because I really dig craft beer. I was intro\u00adduced to craft beer while working as an archaeologist.  My crew chief was one of the investors of Weyerbacher Brewing and while doing field\u00ad work you are constantly traveling.  Each remote little town we'd stop at, we'd hit the local distributor to find local brews to sample and discuss after work. Archaeology also led me out west to Montana, where I spent time traveling the surrounding states and this gave me the opportunity to try a new array of specialty craft beers. Simply the desire to understand more about the complexity  of the various beer styles drove me to try and brew some myself. Still much to learn, but it sure is fun!\r\n",
            "slug": "dana-staudt-stadthaus-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:14:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "9",
            "brewer_id": "3",
            "name": "Red Sprite IPA **VIP SESSION**",
            "style": "IPA",
            "og": "1.069",
            "abv": "7.5",
            "ibu": "84",
            "description": "I haven't brewed a true IPA in several years and I was looking for something different to brew. Red Sprites are an elusive, ephemeral upper atmosphere optical phenomena that occur above thunderstorms. Since the original recipe was a clone for an IPA named after another optical atmospheric phenomenon it seemed appropriate.\r\n\r\nMalts: CMC Pale Ale Malt, Carastan, CaraPils\r\nHops: Simcoe, Columbus, Cascade, Centennial, Amarillo",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "3",
            "name": "Greg Brooks",
            "brewery": "Homebrewer",
            "image": "",
            "imageSmall": "",
            "imageMedium": "",
            "story": "I've been brewing for approximately 14 years now and  I've been brewing mostly ales with the occasional light hybrid or historical beer thrown in for variety. For the past three years I proudly served as the president of T.R.U.B., a title I happily  passed onto my successor this past summer. While my schedule has been busy, I've been brewing more and, hopefully, improving as time goes on. Thanks for coming tonight and  please enjoy the beers.",
            "slug": "Greg-Brooks",
            "untappd_id": "",
            "created": "2013-11-30 18:45:04",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "5",
            "brewer_id": "2",
            "name": "River Rat Brown Porter",
            "style": "Brown Porter",
            "og": "1.059",
            "abv": "6.2",
            "ibu": "22",
            "description": "A very traditional Brown Porter that'll warm you up on a cold fall evening. Sammy Smith would be proud.\r\n\r\nMalts: 2-Row Pale Malt, Brown Malt, Chocolate Malt, Caramei40L Malt Hops: Fuggles",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "2",
            "name": "Brian Bolsinger",
            "brewery": "River Rat Craft Brewery",
            "image": "\/files\/uploads\/brian-bolsinger-river-rat-brewing.png",
            "imageSmall": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-130x163-529a77b7ed3c9-small.png",
            "imageMedium": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-284x357-529a77b80a442-medium.png",
            "story": "Inspired by the city of rivers where it's brewed, River Rat Craft Brewery comes at you with a perfect balance of bold flavors, fresh ingredients, and a meticulous attention to detail.  All River Rat beers are proudly brewed with fresh barley, malt and hops and no extracts or adjunct ingredients are added.\r\n\r\nCheers, Brian\r\n",
            "slug": "Brian-Bolsinger",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "6",
            "brewer_id": "2",
            "name": "River Rat Dunkel",
            "style": "Munich Dunkel",
            "og": "1.058",
            "abv": "6.0",
            "ibu": "20",
            "description": "This is River Rat's take on a traditional Munich Dunkel. It's a creamy brown beer with rich malty sweetness and hints of bread and toast. Made famous by The Hofbrauhaus, the Munich Dunkel is a crisp and flavorful choice that's good all year round.\r\n\r\nMalts: Munich Malt, Carafa Special Malt \r\nHops: Halltertau",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "2",
            "name": "Brian Bolsinger",
            "brewery": "River Rat Craft Brewery",
            "image": "\/files\/uploads\/brian-bolsinger-river-rat-brewing.png",
            "imageSmall": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-130x163-529a77b7ed3c9-small.png",
            "imageMedium": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-284x357-529a77b80a442-medium.png",
            "story": "Inspired by the city of rivers where it's brewed, River Rat Craft Brewery comes at you with a perfect balance of bold flavors, fresh ingredients, and a meticulous attention to detail.  All River Rat beers are proudly brewed with fresh barley, malt and hops and no extracts or adjunct ingredients are added.\r\n\r\nCheers, Brian\r\n",
            "slug": "Brian-Bolsinger",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "7",
            "brewer_id": "2",
            "name": "River Rat Kolsch",
            "style": "Kolsch",
            "og": "1.052",
            "abv": "5.5",
            "ibu": "25",
            "description": "River Rat's Kolsch is a light colored medium bodied beer that's easy to drink for all. Flavorful and complex enough for beer enthusiasts, and \"normal\" enough for those used to a silver bullet.\r\n\r\nMalts: Pilsner, Vienna\r\nHops: Hallertau",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "2",
            "name": "Brian Bolsinger",
            "brewery": "River Rat Craft Brewery",
            "image": "\/files\/uploads\/brian-bolsinger-river-rat-brewing.png",
            "imageSmall": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-130x163-529a77b7ed3c9-small.png",
            "imageMedium": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-284x357-529a77b80a442-medium.png",
            "story": "Inspired by the city of rivers where it's brewed, River Rat Craft Brewery comes at you with a perfect balance of bold flavors, fresh ingredients, and a meticulous attention to detail.  All River Rat beers are proudly brewed with fresh barley, malt and hops and no extracts or adjunct ingredients are added.\r\n\r\nCheers, Brian\r\n",
            "slug": "Brian-Bolsinger",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "1",
            "brewer_id": "1",
            "name": "Root Bender",
            "style": "Robust Porter\/Specialty",
            "og": "1.050",
            "abv": "4.6",
            "ibu": "21.8",
            "description": "This brew was inspired by my father in law, who does not drink beer, but loves root beer. In an attempt to convert him, we made this hybrid. This robust porter strikes a delicate balance between pop and beer. The roastiness of the dark malts accentuates the spicy character of the root beer.\r\n\r\nMalts: Pilsen, Munich, Caramei40L, Carahell, Chocolate, Honey, Special B\r\nHops: Northern Brewer(bittering), Cluster, Hallertauer",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "1",
            "name": "Gregor Bender",
            "brewery": "Soul Bender Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-130x116-529b3a322588d-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-300x268-529b3a3253510-medium.png",
            "story": "I have been brewing on and  off for over a decade, but  became much more serious a year and  a half ago  when  I    joined TRUB. My first big solo project was brewing 2 beers and 2 ciders for my wedding, which luckily, turned out  well.  My wife has recently joined in on the fun and had a hand in the formulation and production of these brews. We enjoy using novel ingredients in creative ways, which is reflected in our beers that you are going to sample today. \r\n\r\nProst!\r\n",
            "slug": "Gregor-Bender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "41",
            "brewer_id": "10",
            "name": "Saison Of Love",
            "style": "Saison",
            "og": "1.059",
            "abv": "6.9",
            "ibu": "27",
            "description": "Pilsner malt, wheat malt (8%), Munich malt (8%), table sugar (16%), Hallertau hops, WLP 565 yeast (Dupont). Carbonated at 15 psi or so, less than style, but more the way I like. This is my favorite beer, kudos to JZ for bringing this recipe to us. I liken it to a dry white wine, but richer and more complex. The clove and pepper hits the nose, the sweet pilsner flavor hits the tongue, then it all dries out and your ready for the next sip or a good cheese while the alcohol warms the cockles. This rendition finished at 1.002 or so, driest version I have ever brewed, still a bit young (brewed 8\/16), probably won't last long enough to find out how good it could get. If you have been to this event before, you have had this beer.",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "10",
            "name": "Dave Roarty",
            "brewery": "BFD Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I love beer.  By homebrewing I get  to make the classic beers, which I love, they  way I like them. Every homebrewer seems to have their own reasons, but all seem to love beer.  Enough  about love, drink up!",
            "slug": "dave-roarty-bfd-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:12:09",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "50",
            "brewer_id": "13",
            "name": "Sehr Gut Weissbier",
            "style": "German Wheat Beer",
            "og": "1.055",
            "abv": "5.5",
            "ibu": "11",
            "description": "",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "13",
            "name": "Shane Walters",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I started brewing over 10 years ago with just the basic pot on the kitchen stove, a kit from the local home brew supply shop and some 12oz bottles. Like most home brewers this was just the  beginning...  I currently brew 10 gallon batches fermenting in a 12.5 gallon stainless steel conical.  I commonly have 4 styles on tap  but still cannot find the patience to age some of them  long enough! My most sought after styles are IPAs, German Lagers\/Weissbiers and Belgian ales.\r\n",
            "slug": "shane-walters",
            "untappd_id": "",
            "created": "2013-12-01 08:18:55",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "19",
            "brewer_id": "5",
            "name": "The Clockwork Orange",
            "style": "Porter",
            "og": "1.048",
            "abv": "5.0",
            "ibu": "39",
            "description": "I've been brewing for 6 years and this is the first porter I have ever made! So I decided to make something really off the wall. Here you have it! I hope you enjoy it!\r\n\r\nMALTS USED: 2 row, 601 , chocolate malt, black patent, carapils\r\nSPECIALTY INGREDIENTS: Fresh orange zest in the primary, chocolate extract in the keg\r\nHOPS USED: Kent golding, falconers flight",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "5",
            "name": "Jason Irwin",
            "brewery": "Buster's Brew",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "This is my third year with TRUB and serving at Brewing Up a Cure! I hope to serve at many more in the future! I have been addicted to brewing my own beer for 7 years now and it all started with a Sierra Nevada  Pale Ale clone. I    hope you enjoy all of my home brews as much as I do.  I tried to out do myself this year with different beers! And look for all of my beers on Untappd! Please check  into them!\r\n",
            "slug": "Jason-Irwin-Busters-Brew",
            "untappd_id": "",
            "created": "2013-12-01 07:56:53",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "26",
            "brewer_id": "7",
            "name": "The Great Pumpkin Porter",
            "style": "Specialty Ale",
            "og": "1.061",
            "abv": "5.9",
            "ibu": "15",
            "description": "A favorite brew of mine and a lot of my friends. Brewed with roasted fresh pumpkin, this rich and roasty Porter is subtly spiced to make a delicious campfire beer. \r\n\r\nMalts: Maris Otter, Crystal 60, Chocolate, Roasted Barley\r\nHops: Northern Brewer",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "31",
            "brewer_id": "8",
            "name": "The Masher",
            "style": "Black IPA",
            "og": "",
            "abv": "7.0",
            "ibu": "115",
            "description": "My Black IPA which I have made for all previous events and continue to try and refine by tweaking the recipe just a bit each time I make it. A very happy beer of with a very dark appearance that makes many people think it will be a roasty beer. However due to the addition of a \"dehusked\" grain the roasted bitterness is removed leaving only a very dark, nearly black color. This beer packs a punch at about 115 IBUs (International Bittering Units) and even though I have made it stronger in prior years I decided to go back more to style for an IPA and it will be about 7% ABV",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "8",
            "name": "Jeff Paul",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am starting my 8th year of homebrewing. When I am consuming beer I really like IPAs and  Belgians but I like to brew all styles. I also really enjoy the  many different seasonal beers that come out this time of year from the Pumpkin Ales, Oktoberfest then leading into the Christmas beers as well. I brew 5 gallon batches using the \"all grain\" method and keg my beers.  When I am not brewing beer I am an IT Consultant and avid bike racer (both road and  mountain).",
            "slug": "jeff-paul",
            "untappd_id": "",
            "created": "2013-12-01 08:04:46",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "30",
            "brewer_id": "7",
            "name": "The Wayfarer",
            "style": "Imperial Witbier w\/Mango",
            "og": "1.068",
            "abv": "7.5",
            "ibu": "25",
            "description": "So a witbier and a mango lassi walk into a bar.. and leave as friends. Eh, that's rather anti-climatic. Hopefully the beer isn't.\r\n\r\nMalts: Pilster, Wheat, Flaked Wheat, Aromatic\r\nHops: Styrian Goldings\r\nSpecial Ingredients: Mango, Coriander, Curacao Orange Peel",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "8",
            "brewer_id": "2",
            "name": "VIP Session",
            "style": null,
            "og": null,
            "abv": null,
            "ibu": null,
            "description": "A variety of handcrafted Mead and Cider",
            "untappd_id": "",
            "created": null,
            "modified": null
        },
        "Brewer": {
            "id": "2",
            "name": "Brian Bolsinger",
            "brewery": "River Rat Craft Brewery",
            "image": "\/files\/uploads\/brian-bolsinger-river-rat-brewing.png",
            "imageSmall": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-130x163-529a77b7ed3c9-small.png",
            "imageMedium": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-284x357-529a77b80a442-medium.png",
            "story": "Inspired by the city of rivers where it's brewed, River Rat Craft Brewery comes at you with a perfect balance of bold flavors, fresh ingredients, and a meticulous attention to detail.  All River Rat beers are proudly brewed with fresh barley, malt and hops and no extracts or adjunct ingredients are added.\r\n\r\nCheers, Brian\r\n",
            "slug": "Brian-Bolsinger",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "46",
            "brewer_id": "11",
            "name": "Wee Stout",
            "style": "Irish Stout",
            "og": "1.046",
            "abv": "4.6",
            "ibu": "35",
            "description": "HOPS USED: Magnum, Northern Brewer",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "11",
            "name": "Dana Staudt",
            "brewery": "Stadthaus Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I got into brewing basically because I really dig craft beer. I was intro\u00adduced to craft beer while working as an archaeologist.  My crew chief was one of the investors of Weyerbacher Brewing and while doing field\u00ad work you are constantly traveling.  Each remote little town we'd stop at, we'd hit the local distributor to find local brews to sample and discuss after work. Archaeology also led me out west to Montana, where I spent time traveling the surrounding states and this gave me the opportunity to try a new array of specialty craft beers. Simply the desire to understand more about the complexity  of the various beer styles drove me to try and brew some myself. Still much to learn, but it sure is fun!\r\n",
            "slug": "dana-staudt-stadthaus-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:14:19",
            "modified": "0000-00-00 00:00:00"
        }
    },
    {
        "Beer": {
            "id": "27",
            "brewer_id": "7",
            "name": "XXX-tra Hot Ginger Beer",
            "style": "Traditional Ginger Beer",
            "og": "1.050",
            "abv": "2.5",
            "ibu": "0",
            "description": "Served the last two years as a VIP session exclusive, this traditional ginger beer has become more and more popular that I decided to make a full keg this year! I first was introduced to homemade ginger beer while working at a Jamaican restaurant, and since then I've been making it myself because nothing else out there burns the way I want it to. Brewed with over 3 pounds of fresh young ginger!",
            "untappd_id": "",
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00"
        },
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        }
    }
];
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
      
      console.log(correctBeer);
      return correctBeer;
    }
  }
})



.factory('BrewerService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var brewers = [
    {
        "Brewer": {
            "id": "1",
            "name": "Gregor Bender",
            "brewery": "Soul Bender Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-130x116-529b3a322588d-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-11-28-at-5-29-42-PM-resize-300x268-529b3a3253510-medium.png",
            "story": "I have been brewing on and  off for over a decade, but  became much more serious a year and  a half ago  when  I    joined TRUB. My first big solo project was brewing 2 beers and 2 ciders for my wedding, which luckily, turned out  well.  My wife has recently joined in on the fun and had a hand in the formulation and production of these brews. We enjoy using novel ingredients in creative ways, which is reflected in our beers that you are going to sample today. \r\n\r\nProst!\r\n",
            "slug": "Gregor-Bender",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "1",
                "brewer_id": "1",
                "name": "Root Bender",
                "style": "Robust Porter\/Specialty",
                "og": "1.050",
                "abv": "4.6",
                "ibu": "21.8",
                "description": "This brew was inspired by my father in law, who does not drink beer, but loves root beer. In an attempt to convert him, we made this hybrid. This robust porter strikes a delicate balance between pop and beer. The roastiness of the dark malts accentuates the spicy character of the root beer.\r\n\r\nMalts: Pilsen, Munich, Caramei40L, Carahell, Chocolate, Honey, Special B\r\nHops: Northern Brewer(bittering), Cluster, Hallertauer",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "2",
                "brewer_id": "1",
                "name": "Banana Bread Ale",
                "style": "Specialty\/Fruit",
                "og": "1.044",
                "abv": "3.4",
                "ibu": "14.7",
                "description": "Over ten pounds of bananas were used in brewing this beer. Nutmeg, cinnamon sticks and vanilla bean infused rum were used to re-create traditional banana bread spicing. Biscuit malt and a little bit of dark roast helps put the oven baked goodness in your glass.\r\n\r\nMalt: Maris Otter, Wheat, Biscuit, Flaked Oats, Caramei40L and 120L, Black Patent, Special B\r\nHops: Northern Brewer (bittering), Styrian Goldings\r\nSpecial Ingredients: Roasted\/Fresh Bananas and peels, cinnamon sticks, toasted whole nutmeg and\r\nvanilla bean infused spiced rum.",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "3",
                "brewer_id": "1",
                "name": "Beet Dust",
                "style": "American Pale Ale\/Specialty",
                "og": "1.061",
                "abv": "6.7",
                "ibu": "36.7",
                "description": "This beer is a spin off ofThree Floyds 'Zombie Dust'. Due to the surplus of beets in our garden this summer, we decided to try them in a beer. The citrus character of the hops is balanced with the classic culinary combination of beets and sage.\r\n\r\nMalt: Pale 2 Row, Carahell, Caramei40L\r\nHops: Amarillo, Citra\r\nSpecial: Roasted garden beets, culinary sage, clary sage, English lavender",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "4",
                "brewer_id": "1",
                "name": "Prickly Wit",
                "style": "Witbier\/Specialty",
                "og": "1.050",
                "abv": "5.8",
                "ibu": "12.6",
                "description": "For my mom's birthday in November, she requested a beer made with prickly pears, as she likes them in margaritas. This Wit adds lime, tequila, and prickly pears to pay tribute to mom's special drink. Prickly Witarita anyone?\r\n\r\nMalt: Flaked Oats, Flaked Wheat, Malted Wheat, Pale 2 Row\r\nHops: Hallertauer (Hersbrucker)\r\nSpecial Ingredients: Prickly Pear juice, coriander, lime zest, orange zest, lemon zest",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "2",
            "name": "Brian Bolsinger",
            "brewery": "River Rat Craft Brewery",
            "image": "\/files\/uploads\/brian-bolsinger-river-rat-brewing.png",
            "imageSmall": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-130x163-529a77b7ed3c9-small.png",
            "imageMedium": "\/files\/uploads\/brian-bolsinger-river-rat-brewing-resize-284x357-529a77b80a442-medium.png",
            "story": "Inspired by the city of rivers where it's brewed, River Rat Craft Brewery comes at you with a perfect balance of bold flavors, fresh ingredients, and a meticulous attention to detail.  All River Rat beers are proudly brewed with fresh barley, malt and hops and no extracts or adjunct ingredients are added.\r\n\r\nCheers, Brian\r\n",
            "slug": "Brian-Bolsinger",
            "untappd_id": "",
            "created": null,
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "5",
                "brewer_id": "2",
                "name": "River Rat Brown Porter",
                "style": "Brown Porter",
                "og": "1.059",
                "abv": "6.2",
                "ibu": "22",
                "description": "A very traditional Brown Porter that'll warm you up on a cold fall evening. Sammy Smith would be proud.\r\n\r\nMalts: 2-Row Pale Malt, Brown Malt, Chocolate Malt, Caramei40L Malt Hops: Fuggles",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "6",
                "brewer_id": "2",
                "name": "River Rat Dunkel",
                "style": "Munich Dunkel",
                "og": "1.058",
                "abv": "6.0",
                "ibu": "20",
                "description": "This is River Rat's take on a traditional Munich Dunkel. It's a creamy brown beer with rich malty sweetness and hints of bread and toast. Made famous by The Hofbrauhaus, the Munich Dunkel is a crisp and flavorful choice that's good all year round.\r\n\r\nMalts: Munich Malt, Carafa Special Malt \r\nHops: Halltertau",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "7",
                "brewer_id": "2",
                "name": "River Rat Kolsch",
                "style": "Kolsch",
                "og": "1.052",
                "abv": "5.5",
                "ibu": "25",
                "description": "River Rat's Kolsch is a light colored medium bodied beer that's easy to drink for all. Flavorful and complex enough for beer enthusiasts, and \"normal\" enough for those used to a silver bullet.\r\n\r\nMalts: Pilsner, Vienna\r\nHops: Hallertau",
                "untappd_id": "",
                "created": null,
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "8",
                "brewer_id": "2",
                "name": "VIP Session",
                "style": null,
                "og": null,
                "abv": null,
                "ibu": null,
                "description": "A variety of handcrafted Mead and Cider",
                "untappd_id": "",
                "created": null,
                "modified": null
            }
        ]
    },
    {
        "Brewer": {
            "id": "3",
            "name": "Greg Brooks",
            "brewery": "Homebrewer",
            "image": "",
            "imageSmall": "",
            "imageMedium": "",
            "story": "I've been brewing for approximately 14 years now and  I've been brewing mostly ales with the occasional light hybrid or historical beer thrown in for variety. For the past three years I proudly served as the president of T.R.U.B., a title I happily  passed onto my successor this past summer. While my schedule has been busy, I've been brewing more and, hopefully, improving as time goes on. Thanks for coming tonight and  please enjoy the beers.",
            "slug": "Greg-Brooks",
            "untappd_id": "",
            "created": "2013-11-30 18:45:04",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "9",
                "brewer_id": "3",
                "name": "Red Sprite IPA **VIP SESSION**",
                "style": "IPA",
                "og": "1.069",
                "abv": "7.5",
                "ibu": "84",
                "description": "I haven't brewed a true IPA in several years and I was looking for something different to brew. Red Sprites are an elusive, ephemeral upper atmosphere optical phenomena that occur above thunderstorms. Since the original recipe was a clone for an IPA named after another optical atmospheric phenomenon it seemed appropriate.\r\n\r\nMalts: CMC Pale Ale Malt, Carastan, CaraPils\r\nHops: Simcoe, Columbus, Cascade, Centennial, Amarillo",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "10",
                "brewer_id": "3",
                "name": "Kolsch n@",
                "style": "Kolsch",
                "og": "1.052",
                "abv": "5.4",
                "ibu": "24",
                "description": "This beer is a repeat from last year. With only five ingredient this should be a simple beer to make but it never seems to work out that way.  The name came about as a result of a celebratory night with friends at the local bar in Morningside, the Bulldog Pub.\r\n\r\nMalts: Best Malz Heidelberg Malt, Vienna Malt\r\nHops: Sterling\r\n",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "11",
                "brewer_id": "3",
                "name": "Bad Dog Brown",
                "style": "American Brown Ale",
                "og": "1.054",
                "abv": "5.5",
                "ibu": "40",
                "description": "It seems like a lot of breweries have brown ales with canine associations. I first brewed this when we had a chocolate lab named Max. He was really a good dog but he would cart off some piece of brewing equipment whenever I made this beer, hence the name.\r\n\r\nMalts: Thomas Fawcett Halcyon, CaraMunich, Crystal40, Crystal 60, Chocolate, Victory\r\nHops: Millenium, Amarillo",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "12",
                "brewer_id": "3",
                "name": "Gratzer\/Grodziske",
                "style": "Smoked Wheat",
                "og": "1.042",
                "abv": "3.9",
                "ibu": "31",
                "description": "This is a style I've been working to working to perfect since I first brewed it for BUAC last year. I've now brewed it three times and I feel like I have a pretty good handle on the style.\r\n\r\nMalts: Best Malz Wheat Malt, Best Malz Pilsner Malt\r\nSpecialty: Oak Smoked Wheat Malt\r\nHops: Crystal",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "4",
            "name": "Terry Denham",
            "brewery": "KeggleBrewing.com",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am the oldest member of TRUB and was also one of the first officers of the club as well. I began brewing a good many years ago after receiving a beer brewing kit as a Christmas present from my wife, Patty.  After designing and building multiple additions to my brewing equipment inventory, I have amassed a great deal of experience and brewing knowledge. In April of 2009, my 'hobby' has now been developed and incorporated into an on-line business named Keggle Brewing, Inc.  You can view my website by going to www.kegglebrewing.com. I am honored to be a part of TRUB and their involvement with the Cystic Fibrosis Foundation. Our group spends many hours helping the Foundation in honor of Sadie Terrick. Please enjoy my beers and this wonderful event.\r\n\r\n",
            "slug": "Terry-Denham",
            "untappd_id": "",
            "created": "2013-11-30 18:56:07",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "13",
                "brewer_id": "4",
                "name": "Buddy's Pumpkin Spice Ale",
                "style": "Specialty Ale",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "Imagine a pumpkin vine wound its way in a field of barley, and a brewer harvested it all to make a beer. Add Northwestern hops and a blend of spices, and you've got Buddy's Pumpkin spiced Ale .. The malt combination provides a smooth body and slightly sweet flavor, which balances perfectly with the earthy notes derived from the pure pumpkin. Buddy's Pumpkin is Unfiltered.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "14",
                "brewer_id": "4",
                "name": "Belgium Strong Winter",
                "style": "Belgian Strong Ale",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "Patterned after some of Belgium's most unique and famous ales, This is a beer that looks innocent in the glass but packs a delicious wallop. TYhe secret is a high percentage of sugar, and easily fermentable sugar that ratchets up the beer's strength while keeping the body light and easy to drink. Smooth mouthfeel, sweet floral maltiness, and rich spiciness from hops and yeast and with cinnamon, nutmeg, and all-spice to give you a Christmassy taste",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "15",
                "brewer_id": "4",
                "name": "Pirates Honey Pale",
                "style": "Golden Ale",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "A refreshing, lightly hopped golden ale brewed with all-natural honey and made with barley, honey, hops, water and yeast. It is brewed in recognition of our Pirates",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "5",
            "name": "Jason Irwin",
            "brewery": "Buster's Brew",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "This is my third year with TRUB and serving at Brewing Up a Cure! I hope to serve at many more in the future! I have been addicted to brewing my own beer for 7 years now and it all started with a Sierra Nevada  Pale Ale clone. I    hope you enjoy all of my home brews as much as I do.  I tried to out do myself this year with different beers! And look for all of my beers on Untappd! Please check  into them!\r\n",
            "slug": "Jason-Irwin-Busters-Brew",
            "untappd_id": "",
            "created": "2013-12-01 07:56:53",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "16",
                "brewer_id": "5",
                "name": "Everything My Fat Darling Loves",
                "style": "Imperial Milk Stout",
                "og": "1.075",
                "abv": "8.0",
                "ibu": "16",
                "description": "This beer really satisfies! This is my second attempt at a candy bar stout. A little better than the first. Next years will be even better! Hope you get to try it with some ice cream made by Nosh from Butler PA! \r\n\r\nMALTS USED: 2 row,roasted barley, crystal 1201, crystal 60, chocolate malt, munich, flaked wheat \r\nSPECIALTY INGREDIENTS: Powdered peanut butter, chocolate chips in boil, Lactose sugar\r\nHOPS USED: Magnum, WGV",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "17",
                "brewer_id": "5",
                "name": "My Precious",
                "style": "Wheat Beer",
                "og": "1.047",
                "abv": "4.6",
                "ibu": "17",
                "description": "The third year of bringing this beer to brewing up a cure, this is a crowd favorite! I changed up the hops a little bit this year for more of a fruity background.\r\n\r\nMALTS USED: wheat, 2 row. honey malt\r\nSPECIALTY INGREDIENTS: 2 pounds of honey at flame out\r\nHOPS USED: Legacy",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "18",
                "brewer_id": "5",
                "name": "Hail To The King Baby",
                "style": "Saison",
                "og": "1.067",
                "abv": "8.5",
                "ibu": "18",
                "description": "I brewed this beer at Coopers Lake Brewers Fest this year. I thought this was a perfect beer to brew there because I already had my smoker there and there was a lack of temp control- Saisons like to ferment hot!\r\n\r\nMALTS USED: Pilsner, wheat, crystal 601, biscuit\r\nSPECIALTY INGREDIENTS: 5 pounds of sugar pumpking I smoked on my big green egg, brown sugar\r\nHOPS USED: WGV, SAAZ",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "19",
                "brewer_id": "5",
                "name": "The Clockwork Orange",
                "style": "Porter",
                "og": "1.048",
                "abv": "5.0",
                "ibu": "39",
                "description": "I've been brewing for 6 years and this is the first porter I have ever made! So I decided to make something really off the wall. Here you have it! I hope you enjoy it!\r\n\r\nMALTS USED: 2 row, 601 , chocolate malt, black patent, carapils\r\nSPECIALTY INGREDIENTS: Fresh orange zest in the primary, chocolate extract in the keg\r\nHOPS USED: Kent golding, falconers flight",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "6",
            "name": "Fred Mason & Eric Heimberger",
            "brewery": "Silver Tap Brewery",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-130x83-529b3ad9e70b6-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-31-57-AM-resize-282x180-529b3ad9f1c0d-medium.png",
            "story": "We started brewing in February  of 2010, the first beer  was an Irish Stout from an extract kit. From started brewing  in February of 2010, the first beer was an Irish Stout  from an extract kit. From that  first batch our passion for making beer grew to where we are today.  Fred and Eric try to brew at least once a month if not more.  We've been lucky enough to win two National  Homebrew competition first round  ribbons, but we are still looking for the elusive final round medal, maybe this year!  Stop by and  give our beers a try you will not be disappointed!\r\n",
            "slug": "fred-mason-eric-heimberger-silver-tap-brewery",
            "untappd_id": "",
            "created": "2013-12-01 07:59:04",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "20",
                "brewer_id": "6",
                "name": "Java 13",
                "style": "Coffee Porter",
                "og": "1.046",
                "abv": "5.5",
                "ibu": "36.8",
                "description": "We love beer and we love coffee ... seemed pretty logical\r\n\r\nMALTS USED: American 2 row, black barley, chocolate malt, crystal40\r\nSPECIALTY INGREDIENTS: Coffee\r\nHOPS USED: East Kent Goldings, Fuggels",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "21",
                "brewer_id": "6",
                "name": "Overlord IPA",
                "style": "American IPA",
                "og": "1.063",
                "abv": "7.5",
                "ibu": "85.3",
                "description": "We stated with a pretty simple IPA recipe and added what thought were some nice hop flavors.\r\n\r\nMALTS USED: American 2 row crystal40\r\nHOPS: Citra, Willamette",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "22",
                "brewer_id": "6",
                "name": "North Side Ale",
                "style": "English Mild",
                "og": "1.036",
                "abv": "3.8",
                "ibu": "16.3",
                "description": "We like English mild and figured we would give it a try.\r\n\r\nMALTS USED: English 2 row crystal 80, 120\r\nHOPS: East Kent Goldings",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "23",
                "brewer_id": "6",
                "name": "Donkey Kick",
                "style": "Oatmeal Stout",
                "og": "1.065",
                "abv": "8.6",
                "ibu": "28.7",
                "description": "We love creamy rich stouts... this is the result.\r\n\r\nMALTS USED: American 2-row, flaked oats, chocolate malt, black patent.\r\nHOPS: East Kent Goldings",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "24",
                "brewer_id": "6",
                "name": "Poo Flinger",
                "style": "Hefeweizen",
                "og": "1.048",
                "abv": "8.6",
                "ibu": "28.7",
                "description": "We both enjoy the banana aroma and clove of the beer and wanted to try the step mash\r\nprocess, this was a good way to do that!\r\n\r\nMALTS USED: German Wheat\r\nHOPS: Hallertau",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "7",
            "name": "Bill Oates",
            "brewery": "Brickhouse-Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-130x113-529b3aec50dfc-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-32-42-AM-resize-294x256-529b3aec694df-medium.png",
            "story": "I started  my long descent into brewing madness in December of 2003. I was at a white elephant gift exchange, when I saw someone open a \"brew your own beer from this box\" kit. It was a sign.  I waited my turn, and stole the gift at the first opportunity I had.  Not surprisingly I was the only one who wanted it. For my future brewing's sake I   never used the kit. I invested in a slightly better kit, and ever since have slowly kept investing more and more money into this obsession. While I have an affinity for English Bitters and Pale Ales I've brewed (somewhat unintentionally) a collection of beers that explore the more non-traditional end of the beer spectrum. I hope you enjoy!",
            "slug": "bill-oates-brickhouse-brewing",
            "untappd_id": "74962",
            "created": "2013-12-01 08:02:19",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "25",
                "brewer_id": "7",
                "name": "Illegal Smile IPA",
                "style": "American IPA\/Fruit Beer",
                "og": "1.065",
                "abv": "7.0",
                "ibu": "60",
                "description": "A west-coast style IPA brewed with some east-coast (Chambersburg, PA to be exact) tree ripened peaches. Served tonight straight up, and 'randalized' through a filter of Multihead hops and peaches. \r\n\r\nMalts: 2-row, Crystal 30, Aromatic, Dextrine\r\nHops: Bravo, Cascade, Centennial, Multihead\r\nSpecial Ingredients: Peaches",
                "untappd_id": "475696",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "26",
                "brewer_id": "7",
                "name": "The Great Pumpkin Porter",
                "style": "Specialty Ale",
                "og": "1.061",
                "abv": "5.9",
                "ibu": "15",
                "description": "A favorite brew of mine and a lot of my friends. Brewed with roasted fresh pumpkin, this rich and roasty Porter is subtly spiced to make a delicious campfire beer. \r\n\r\nMalts: Maris Otter, Crystal 60, Chocolate, Roasted Barley\r\nHops: Northern Brewer",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "27",
                "brewer_id": "7",
                "name": "XXX-tra Hot Ginger Beer",
                "style": "Traditional Ginger Beer",
                "og": "1.050",
                "abv": "2.5",
                "ibu": "0",
                "description": "Served the last two years as a VIP session exclusive, this traditional ginger beer has become more and more popular that I decided to make a full keg this year! I first was introduced to homemade ginger beer while working at a Jamaican restaurant, and since then I've been making it myself because nothing else out there burns the way I want it to. Brewed with over 3 pounds of fresh young ginger!",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "28",
                "brewer_id": "7",
                "name": "Hyper-Hypo",
                "style": "English Brown Ale\/Specialty",
                "og": "1.056",
                "abv": "5.5",
                "ibu": "30",
                "description": "Put on your protective helmet and safety harness, because this Brown Ale is going to bring out your inner spaz. Brewed with Kana coffee and chocolate nibs.\r\n\r\nMalts: Maris Otter, Crystal 60, Chocolate, Flaked Oats Hops: Nugget, Goldings\r\nSpecial Ingredients: Kana Coffee, Chocolate Nibs",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "29",
                "brewer_id": "7",
                "name": "Cow Tipper",
                "style": "Milk Stout w\/Coconut",
                "og": "1.061",
                "abv": "5.5",
                "ibu": "24",
                "description": "And here we sit without opposable thumbs...\r\n\r\nMalts: Mari Otter, Chocolate, Crystal 60 & 120, Oats, Roasted Barley, Carafa III\r\nHops: Northern Brewer\r\nSpecialty Ingredients: Toasted Flaked Coconut, Black Strap Molasses",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "30",
                "brewer_id": "7",
                "name": "The Wayfarer",
                "style": "Imperial Witbier w\/Mango",
                "og": "1.068",
                "abv": "7.5",
                "ibu": "25",
                "description": "So a witbier and a mango lassi walk into a bar.. and leave as friends. Eh, that's rather anti-climatic. Hopefully the beer isn't.\r\n\r\nMalts: Pilster, Wheat, Flaked Wheat, Aromatic\r\nHops: Styrian Goldings\r\nSpecial Ingredients: Mango, Coriander, Curacao Orange Peel",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "8",
            "name": "Jeff Paul",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I am starting my 8th year of homebrewing. When I am consuming beer I really like IPAs and  Belgians but I like to brew all styles. I also really enjoy the  many different seasonal beers that come out this time of year from the Pumpkin Ales, Oktoberfest then leading into the Christmas beers as well. I brew 5 gallon batches using the \"all grain\" method and keg my beers.  When I am not brewing beer I am an IT Consultant and avid bike racer (both road and  mountain).",
            "slug": "jeff-paul",
            "untappd_id": "",
            "created": "2013-12-01 08:04:46",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "31",
                "brewer_id": "8",
                "name": "The Masher",
                "style": "Black IPA",
                "og": "",
                "abv": "7.0",
                "ibu": "115",
                "description": "My Black IPA which I have made for all previous events and continue to try and refine by tweaking the recipe just a bit each time I make it. A very happy beer of with a very dark appearance that makes many people think it will be a roasty beer. However due to the addition of a \"dehusked\" grain the roasted bitterness is removed leaving only a very dark, nearly black color. This beer packs a punch at about 115 IBUs (International Bittering Units) and even though I have made it stronger in prior years I decided to go back more to style for an IPA and it will be about 7% ABV",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "32",
                "brewer_id": "8",
                "name": "Irish Red Ale",
                "style": "Irish Red Ale",
                "og": "",
                "abv": "5.1",
                "ibu": "20",
                "description": "A reddish\/amber ale with a nice malty presence and low hop bitterness. It is a good and easy drinking beer and is relatively low in alcohol. I was going for a style like Smithwick's or Killian's with this beer. The ABV is 5.1% and the IBUs are about 20.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "33",
                "brewer_id": "8",
                "name": "Chocolate Imperial Stout",
                "style": "Chocolate Stout",
                "og": "",
                "abv": "12",
                "ibu": "24",
                "description": "I wanted to make another attempt at this beer this year. I made it for last year's event but feel it was a little too young and needed some time to age so this year I brewed it much sooner. I start with a stout style recipe but also amped up the chocolate malts plus used Belgian chocolate and milk sugar during the boil and also use cacao\"nibs\" and a little vanilla extract during secondary fermentation to hopefully provide a fairly strong chocolate aroma and taste with some good sweetness. I am attempting to ramp up both the chocolate flavor and aroma and also the alcohol o\/o again this year. My goal is to closely match a favorite of mine Southern Tier's Choklat. At 12% ABV and 24 IBUs this beer will hopefully appease the chocolate lover in all of us but will be a huge beer!",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "34",
                "brewer_id": "8",
                "name": "Hefeweizen",
                "style": "Hefeweizen",
                "og": "",
                "abv": "5.2",
                "ibu": "15.2",
                "description": "A truly classic German style wheat beer but with the yeast still present in the beer so you are left with the very typical hazy appearance and the typical banana and clove flavors. As is normal with this style it is very low in hop bitterness as well using only low bittering German noble hops. My recipe parallels a Weihenstephan Hefeweizen which is form the world's oldest working brewery 5.2% ABV and 15.2 IBUs.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "9",
            "name": "Andy White, Brayton Batson, Paul Bossung and Nick Weiss",
            "brewery": "Perfect Pitch Brewing",
            "image": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM.png",
            "imageSmall": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-130x134-529b3b0f6e14f-small.png",
            "imageMedium": "\/files\/uploads\/Screen-Shot-2013-12-01-at-8-33-33-AM-resize-288x297-529b3b0f78c67-medium.png",
            "story": "Perfect Pitch is a collaboration of homebrewers, who support each other's efforts. Brayton, Andy, and Paul have been brewing together for over four years. This past year, Nick has been added  to the fold, and he's been learning the ins and outs of homebrew.  We hope to continue to brew for friends and family for many years to come. This year, we decided to do something special for BUAC with Perfect Pitch's British Brewing series. All of the beers were brewed with all the same ingredients except for one in each case.  All of them are comprised  mostly of british 2-row, Maris Otter, crystal 60, and some chocolate malt for some color and flavoring. White Labs WLPOOS was used for all of the ales, and the same bittering hops were used for the whole line. Fear not good people! Each beer has a special ingredient to show the effect of that ingredient in the beer. We hope you try them all.\r\n",
            "slug": "perfect-pitch-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:09:57",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "35",
                "brewer_id": "9",
                "name": "Brown Ale",
                "style": "Brown Ale",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "This is the basis for our british series. There are no tricks here; just a nice session beer for everybody to enjoy.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "36",
                "brewer_id": "9",
                "name": "Porter",
                "style": "Porter",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "To make the porter, some chocolate and roasted barley were added to the grain bill, along with more 2-row to up the gravity.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "37",
                "brewer_id": "9",
                "name": "Polano Porter",
                "style": "Specialty Beer",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "This is the same recipe as the Porter, but we added a non-traditional ingredient... poblano peppers. The pepper flavor should stand out i the nose and hit the tongue right off the bat, but don't expect it to linger in your throat. Many people are surprised by how refreshing this beer is.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "38",
                "brewer_id": "9",
                "name": "Oatmeal Stout",
                "style": "Oatmeal Stout",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "Oatmeal was added to this recipe to give a full mouth feel. There is also more chocolate and roasted barley in this recipe than in the porter.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "39",
                "brewer_id": "9",
                "name": "ESB",
                "style": "Extra Special Bitter",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "This is an Extra Special Bitter. This style of beer should be easy drinking for an entire session. Hops should be very present, but not nearly as strong as in an IPA. There is not any chocolate malt in this recipe.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "40",
                "brewer_id": "9",
                "name": "IPA",
                "style": "English IPA",
                "og": "",
                "abv": "",
                "ibu": "",
                "description": "Indian Pale Ale is probably a style you're familiar with. This one has Fuggles and should be a little hoppier than the ESB. Also, floral hop character should be stronger in this ale, since it was dry hopped in secondary fermentation. There is not any chocolate malt in this recipe, either.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "10",
            "name": "Dave Roarty",
            "brewery": "BFD Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I love beer.  By homebrewing I get  to make the classic beers, which I love, they  way I like them. Every homebrewer seems to have their own reasons, but all seem to love beer.  Enough  about love, drink up!",
            "slug": "dave-roarty-bfd-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:12:09",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "41",
                "brewer_id": "10",
                "name": "Saison Of Love",
                "style": "Saison",
                "og": "1.059",
                "abv": "6.9",
                "ibu": "27",
                "description": "Pilsner malt, wheat malt (8%), Munich malt (8%), table sugar (16%), Hallertau hops, WLP 565 yeast (Dupont). Carbonated at 15 psi or so, less than style, but more the way I like. This is my favorite beer, kudos to JZ for bringing this recipe to us. I liken it to a dry white wine, but richer and more complex. The clove and pepper hits the nose, the sweet pilsner flavor hits the tongue, then it all dries out and your ready for the next sip or a good cheese while the alcohol warms the cockles. This rendition finished at 1.002 or so, driest version I have ever brewed, still a bit young (brewed 8\/16), probably won't last long enough to find out how good it could get. If you have been to this event before, you have had this beer.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "42",
                "brewer_id": "10",
                "name": "Leroy",
                "style": "Robust Porter",
                "og": "1.064",
                "abv": "6.6",
                "ibu": "37",
                "description": "US 2-row barley, Crystal40 (9%), Chocolate (350) (6%), Black patent (4%), US Goldings and Fuggles hops, California ale (dry). I named this Leroy because I love the name and think it is a great name for a robust porter (bag carrier). This beer reminds me of dark chocolate, which finishes nice and clean making you want more. Better as it warms a bit. Very easy to drink but beware the buzz, it sneaks up on you. I love this beer with a cigar, it mixes well with the tobacco flavors and keeps the palate clean. First time I have brought this one- another personal favorite (I sip as I write). Another reason I seem to keep going back to British style beers. This one is also young, brewed 8\/24, so still has a bit of yeast in the flavor and nose.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "43",
                "brewer_id": "10",
                "name": "Bitter Bastard",
                "style": "Extra Special Bitter",
                "og": "1.053",
                "abv": "5.3",
                "ibu": "41",
                "description": "English 2-row pale malt, crystal 20 (5%), crystal 120 (2%). First gold hops. British ale (dry) yeast, I think this beer is all about tasting the hop. It is a very earthy hop, maybe something herbal I can't describe, but that's the hop you taste. This beer changes as you take a few sips. First the hops assert themselves above all else, then the palate filter them out a bit and the malt come through, balancing it out a bit more. This is my drink a lot beer. Once I get started it is really hard to stop at one. I like the firm bitterness, without any harshness. I also like the british hop flavor, which is tough to find in pale ales and IPAs commercially, with their lovely grapefruit, pine notes. Cheers and imagine yourself in a nice dark, woody, smoky pub with darts in the background.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "11",
            "name": "Dana Staudt",
            "brewery": "Stadthaus Brewing",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I got into brewing basically because I really dig craft beer. I was intro\u00adduced to craft beer while working as an archaeologist.  My crew chief was one of the investors of Weyerbacher Brewing and while doing field\u00ad work you are constantly traveling.  Each remote little town we'd stop at, we'd hit the local distributor to find local brews to sample and discuss after work. Archaeology also led me out west to Montana, where I spent time traveling the surrounding states and this gave me the opportunity to try a new array of specialty craft beers. Simply the desire to understand more about the complexity  of the various beer styles drove me to try and brew some myself. Still much to learn, but it sure is fun!\r\n",
            "slug": "dana-staudt-stadthaus-brewing",
            "untappd_id": "",
            "created": "2013-12-01 08:14:19",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "44",
                "brewer_id": "11",
                "name": "Pumped Up Porter ***VIP SESSION***",
                "style": "Bourbon Vanilla Imperial Porter",
                "og": "1.086",
                "abv": "8.0",
                "ibu": "38.1",
                "description": "MALTS USED: Pale, Munich, Brown, Crystal, and Chocolate\r\nHOPS USED: Magnum and East Kent Goldings\r\nSPECIALTY INGREDIENTS: Vanilla beans and bourbon",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "45",
                "brewer_id": "11",
                "name": "Just an IPA",
                "style": "India Pale Ale",
                "og": "1.061",
                "abv": "6.0",
                "ibu": "60",
                "description": "HOPS USED: Columbus, Cascade",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "46",
                "brewer_id": "11",
                "name": "Wee Stout",
                "style": "Irish Stout",
                "og": "1.046",
                "abv": "4.6",
                "ibu": "35",
                "description": "HOPS USED: Magnum, Northern Brewer",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "12",
            "name": "Shane Terrick",
            "brewery": "Office Brewing Co.",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I have been brewing for over 10 years now, a lot less now that other things in life take a front seat to my brewing.  Our 9 year old daughter Sadie has Cystic Fibrosis and this event helps fund research to help find a cure for this disease. We really enjoy this event to socialize and talk about beer and  see old friends find a cure for this disease. My family and I would  like to personally thank you for coming and supporting this event and cause.\r\n",
            "slug": "Shane-Terrick-Office-Brewing-Co",
            "untappd_id": "",
            "created": "2013-12-01 08:16:01",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "47",
                "brewer_id": "12",
                "name": "Fahpa-five Acres Harvest Pale Ale",
                "style": "American Pale Ale",
                "og": "1.063",
                "abv": "6.7",
                "ibu": "75",
                "description": "This is a pale ale recipe that I normally only dry hop with my homegrown hops, but this version has all hops straight off the vine this fall.\r\n\r\nMALTS USED: 2-row Pale,Biscuit,brown, Crystai40L\r\nHOPS USED: Centennial, Cascade, Both Straight off of the vine.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "48",
                "brewer_id": "12",
                "name": "Psuedo Pilsner",
                "style": "Pilsner",
                "og": "1.050",
                "abv": "4.8",
                "ibu": "20",
                "description": "This is my take on a Pilsner but without a lager yeast and the lagering process. I use an american ale yeast fermented at a lower temperature.\r\n\r\nMalts: Pilsner 2-row, Flaked Oats, and Crystal 40L\r\nHops: Columbus, Hallertau",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    },
    {
        "Brewer": {
            "id": "13",
            "name": "Shane Walters",
            "brewery": "Homebrewer",
            "image": null,
            "imageSmall": "",
            "imageMedium": "",
            "story": "I started brewing over 10 years ago with just the basic pot on the kitchen stove, a kit from the local home brew supply shop and some 12oz bottles. Like most home brewers this was just the  beginning...  I currently brew 10 gallon batches fermenting in a 12.5 gallon stainless steel conical.  I commonly have 4 styles on tap  but still cannot find the patience to age some of them  long enough! My most sought after styles are IPAs, German Lagers\/Weissbiers and Belgian ales.\r\n",
            "slug": "shane-walters",
            "untappd_id": "",
            "created": "2013-12-01 08:18:55",
            "modified": "0000-00-00 00:00:00"
        },
        "Beer": [
            {
                "id": "49",
                "brewer_id": "13",
                "name": "Flat Face IPA",
                "style": "American India Pale Ale",
                "og": "1.061",
                "abv": "6.5",
                "ibu": "80",
                "description": "Named after my Pug since he is always soaking up the sun staring at me while I fumble around with my brewery.",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            },
            {
                "id": "50",
                "brewer_id": "13",
                "name": "Sehr Gut Weissbier",
                "style": "German Wheat Beer",
                "og": "1.055",
                "abv": "5.5",
                "ibu": "11",
                "description": "",
                "untappd_id": "",
                "created": "0000-00-00 00:00:00",
                "modified": "0000-00-00 00:00:00"
            }
        ]
    }
];

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
      
      console.log(correctBrewer);
      return correctBrewer;
    }
  }
});
