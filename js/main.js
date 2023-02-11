



(function ($) {


  $(document).ready(function ($) {

    $(".open-menu-btn").on("click", function () {
      $(".mobile-menu-area").addClass("toggle-mobile-menu");
    });
    $(".close-btn").on("click", function () {
      $(".mobile-menu-area").removeClass("toggle-mobile-menu");
    });


    const mobileMenuChildrens = $(".mobile-menu-area .has-dropdown");

    Array.from(mobileMenuChildrens).forEach(function (hasSubmenu) {
      $(hasSubmenu).on('click', function () {
        $(this).toggleClass('submenuOpen');
      });
    });



    // sticky menu
    $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $(".home-header-area").removeClass('transparent-header');
        $(".home-header-area").addClass('header');
      } else {
        $(".home-header-area").removeClass('header');
        $(".home-header-area").addClass('transparent-header');
      }
    });
  });
})(jQuery);
