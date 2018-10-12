/*Banner>> owl-carousel*/
$('.banner').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:500,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
         
        }
    }
});


$('.blog').owlCarousel({
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
            items:2,
            nav:true,
         
        }
    }
});

