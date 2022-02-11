(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' },
            { src: 'images/slide-image03.jpg' },
            { src: 'images/slide-image04.jpg' },
            { src: 'images/slide-image05.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ],
        overlay: true,
        color:"#000000"
    });

})(jQuery);
