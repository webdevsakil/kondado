gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);
const verticalSlides = document.querySelectorAll('.db-vertical-slider .swiper-slide');
const slidesCount = verticalSlides.length;



Observer.create({
    target: "#platformBannar",
    type: "wheel,touch",
    onDown: () => {
        gsap.to(window, { duration: 1, scrollTo: 600 });
    }
});
Observer.create({
    target: verticalSlides[0],
    type: "wheel,touch",
    onUp: () => {
        gsap.to(window, { duration: 1, scrollTo: "#platformBannar" });
    }
});

Observer.create({
    target: verticalSlides[slidesCount - 1],
    type: "wheel,touch",
    onDown: () => {
        gsap.to(window, { duration: 1, scrollTo: "#blog" });
    }
});
Observer.create({
    target: "#blog",
    type: "wheel,touch",
    onUp: () => {
        gsap.to(window, { duration: 1, scrollTo:"#database" });
    }
});




var swiper = new Swiper(".brands-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    speed: 1500,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
});

var dbSlider = new Swiper(".db-vertical-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    speed: 1500
});



(function ($) {
    "use strict";

    $(document).ready(function ($) {

        $(".open-menu-btn").on('click', function () {
            $('.mobile-menu-area').addClass('toggle-mobile-menu')
        })
        $(".close-btn").on('click', function () {
            $('.mobile-menu-area').removeClass('toggle-mobile-menu')
        })



        // popup video

        $('.video-player').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }


                },

                srcAction: 'iframe_src',
            }
            // other options
        });

    });
})(jQuery);