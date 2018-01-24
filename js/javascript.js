//Particles

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":2,"color":"#00634e"},"polygon":{"nb_sides":3},"image":{"width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#00b297","opacity":0.8,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, update; count_particles = document.querySelector('.js-count-particles'); update = function() {requestAnimationFrame(update); }; requestAnimationFrame(update);

// Google Maps
function initialize() {
    var myLatlng = new google.maps.LatLng(51.5068837,-0.1286353,16); // here you can specify your location
    var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},
        {"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},
        {"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},
        {"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},
        {"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},
        {"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},
        {"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels",
        "stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#438482"},{"lightness":-25},{"saturation":-97}]}]

    var mapOptions = {
        zoom: 11,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }



    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({styles: styles});
}




google.maps.event.addDomListener(window, 'load', initialize);
// Google Maps end


jQuery(document).ready(function( $ ) {
    // subscribe:
    $("#buttonSubscribe").click(function(){
        var vemail = $("#email").val();
        if(vemail=='')
        {
            alert("Please fill out the form");
        }
        else if(vemail==''){alert('Email field is required')}
        else{
            $.get("php/email.php", { email:vemail },
                function(response, status){
                    $("#email").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });

    // contact
    $("#buttonContact").click(function(){
        var vname = $("#InputName").val();
        var vemail = $("#InputEmail").val();
        var vmessage = $("#InputMessage").val();
        if(vname=='' || vemail=='' || vmessage=='')
        {
            alert("Please fill out the form");
        }
        else{
            $.get("php/contact.php", { name:vname,email:vemail,message:vmessage },
                function(response, status){
                    $("#InputName").val('');
                    $("#InputEmail").val('');
                    $("#InputMessage").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });


    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    // counterUp
    $('span').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
    });

    // ScrollReveal
    window.sr = new scrollReveal();

    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function(){
// declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
// HTML5 proves useful for helping with creating JS functions!
// also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

// background position
            var coords = '50% '+ yPos + 'px';

// move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function
});




