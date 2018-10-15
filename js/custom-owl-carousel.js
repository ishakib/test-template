$(document).ready(function (){

    /*Banner>> owl-carousel*/
    $('.banner').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:500,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:1,
                nav:false,
            },
            1000:{
                items:1,
                nav:true,
             
            }
        }
    });


    /*controlbar*/
    var owl = $('.banner');
    owl.owlCarousel();
    // Go to the next item
    $('.prev-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.next-btn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });




    $('.blog').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:500,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:2,
                nav:true,
             
            }
        }
    });

    $('.team').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:500,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
             
            }
        }
    });

});
