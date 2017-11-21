// Google Maps
$(document).ready(function() {

    $('body').noisy({
        intensity: 0.2,
        size: 200,
        opacity: 0.28,
        randomColors: false, // true by default
        color: '#000000'
    });

    //Google Maps JS
    //Set Map
    function initialize() {
        var myLatlng = new google.maps.LatLng(51.42564429999999, 0.12292939999997543);
        var imagePath = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=000000&scale=2.0'
        var mapOptions = {
            zoom: 11,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        //Callout Content
        var contentString = 'Frali, Market Parade, Sidcup, Kent, DA14 6ES';
        //Set window width + content
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

        //Add Marker
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: imagePath,
            title: 'image title'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

});

$(document).ready(function() {
    "use strict";

    //define menu filtering visibility function
    function menuFilter(categoryClass, button) {
        $(".menuListContainer").removeClass("allMenuColor");
        $(".button").removeClass("activeButton");
        button.addClass("activeButton");
        $(".menuList").hide("fast");
        $(categoryClass).show("fast");
    }

    //button click event handlers
    $("#btnAll").click(function() {
        $(".button").removeClass("activeButton");
        $(".menuListContainer").addClass("allMenuColor");
        $(".menuList").show("fast");
    });

    $("#btnPastes").click(function() {
        menuFilter($(".pastes"), $("#btnPastes"));
    });

    $("#btnRisotti").click(function() {
        menuFilter($(".risotti"), $("#btnRisotti"));
    });

    $("#btnBeverages").click(function() {
        menuFilter($(".beverages"), $("#btnBeverages"));
    });

    $("#btnCarnes").click(function() {
        menuFilter($(".carnes"), $("#btnCarnes"));
    });

    $("#btnDesserts").click(function() {
        menuFilter($(".desserts"), $("#btnDesserts"));
    });

    $("#btnCheeseboards").click(function() {
        menuFilter($(".cheeseboards"), $("#btnCheeseboards"));
    });

    $("#btnPesces").click(function() {
        menuFilter($(".pesces"), $("#btnPesces"));
    });

    $("#btnAntipasti").click(function() {
        menuFilter($(".antipasti"), $("#btnAntipasti"));
    });

    $("#btnSalads").click(function() {
        menuFilter($(".salads"), $("#btnSalads"));
    });
});
 
$(document).ready(function() {
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});

$(document).ready(function(){
   $(window).bind('scroll', function() {
		 if ($(window).scrollTop() > 30) {
			 $('.nav').addClass('fixed');
		 }
		 else {
			 $('.nav').removeClass('fixed');
		 }
	});
});
