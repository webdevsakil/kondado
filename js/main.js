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

const verticalSlider = new Swiper(".vertical-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "vertical",
  mousewheel: true,
  effect: "fade",
  speed: 1000,
  loop: true,
  parallax: true,
  autoplay: false,
  grabCursor: true,
  centerMode: false,
  mousewheelSensitivity: 1,
  mousewheel: {
    releaseOnEdges: true,
  },
  loopFillGroupWithBlank: false,
  slidesPerView: "auto",
  touchReleaseOnEdges: true,
});
verticalSlider.swiper;

(function ($) {
  "use strict";

  $(document).ready(function ($) {
    $(".open-menu-btn").on("click", function () {
      $(".mobile-menu-area").addClass("toggle-mobile-menu");
    });
    $(".close-btn").on("click", function () {
      $(".mobile-menu-area").removeClass("toggle-mobile-menu");
    });

    // popup video

    $(".video-player").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: "v=",

            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "https://player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed",
          },
        },

        srcAction: "iframe_src",
      },
      // other options
    });

    // pricing
    var locale_currency = "usd";
    var plans = [
      {
        kdd_parent_product_id: "7",
        name: "Lite",
        price: { brl: "389", usd: "89" },
        million_rows: "10",
        pipelines: "30",
      },
      {
        kdd_parent_product_id: "7",
        name: "Lite",
        price: { brl: "389", usd: "89" },
        million_rows: "10",
        pipelines: "30",
      },
      {
        kdd_parent_product_id: "8",
        name: "Basic",
        price: { brl: "599", usd: "139" },
        million_rows: "25",
        pipelines: "75",
      },
      {
        kdd_parent_product_id: "9",
        name: "Plus",
        price: { brl: "969", usd: "219" },
        million_rows: "50",
        pipelines: "150",
      },
      {
        kdd_parent_product_id: "28",
        name: "Q75",
        price: { brl: "1489", usd: "339" },
        million_rows: "75",
        pipelines: "200",
      },
      {
        kdd_parent_product_id: "11",
        name: "E100",
        price: { brl: "1999", usd: "459" },
        million_rows: "100",
        pipelines: "300",
      },
      {
        kdd_parent_product_id: "12",
        name: "E200",
        price: { brl: "2999", usd: "689" },
        million_rows: "200",
        pipelines: "500",
      },
      {
        kdd_parent_product_id: "13",
        name: "E500",
        price: { brl: "3999", usd: "919" },
        million_rows: "500",
        pipelines: "800",
      },
      {
        kdd_parent_product_id: "14",
        name: "E1000",
        price: { brl: "4999", usd: "1139" },
        million_rows: "1000",
        pipelines: "1000",
      },
      {
        kdd_parent_product_id: "15",
        name: "E2000",
        price: { brl: "6999", usd: "1599" },
        million_rows: "2000",
        pipelines: "2000",
      },
      {
        kdd_parent_product_id: "34",
        name: "E4000",
        price: { brl: "7999", usd: "1749" },
        million_rows: "4000",
        pipelines: "2000",
      },
      {
        kdd_parent_product_id: "35",
        name: "E10B",
        price: { brl: "8999", usd: "1899" },
        million_rows: "10000",
        pipelines: "2000",
      },
      {
        kdd_parent_product_id: "36",
        name: "E20B",
        price: { brl: "9999", usd: "2049" },
        million_rows: "20000",
        pipelines: "2000",
      },
    ];

    $("#price_slider").attr("max", plans.length - 1);
    $("#price_slider").attr("min", "0");
    $("#price_slider").attr("value", "1");

    $("#price").text(plans[1].price[locale_currency]);
    $("#million_rows").text(plans[1].million_rows);
    $("#pipelines").text(plans[1].pipelines);

    $("#price_slider").change(function () {
      if (this.value == 0) {
        this.value = 1;
      }

      $("#price").text(plans[this.value].price[locale_currency]);
      if (parseInt(plans[this.value].million_rows) < 1000) {
        $("#million_rows").text(plans[this.value].million_rows);
        $("#million_qualifier").text("million rows/month");
      } else if (parseInt(plans[this.value].million_rows) == 1000) {
        $("#million_rows").text("1");
        $("#million_qualifier").text("billion rows/month ");
      } else if (parseInt(plans[this.value].million_rows) > 1000) {
        $("#million_rows").text(
          parseInt(plans[this.value].million_rows) / 1000
        );
        $("#million_qualifier").text("billion rows/month ");
      }
      $("#pipelines").text(plans[this.value].pipelines);
    });

    // sticky menu

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 230) {
        $(".header-area").addClass("sticky-header");
      } else {
        $(".header-area").removeClass("sticky-header");
      }
    });
  });
})(jQuery);
