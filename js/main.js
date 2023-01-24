

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