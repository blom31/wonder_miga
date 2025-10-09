  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $(".hero-slides").vegas({
        slides: [
          {
            src: "https://res.cloudinary.com/dv9yjyclh/image/upload/v1760048811/portada-1_lap2uc.jpg",
          },
          {
            src: "https://res.cloudinary.com/dv9yjyclh/image/upload/v1760048810/lechuga2_ear34y.jpg",
          },
          {
            src: "https://res.cloudinary.com/dv9yjyclh/image/upload/v1760048812/portada-3_ldshsa.jpg",
          },
        ],
        timer: false,
        animation: "kenburns",
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      let el = $(this).attr('href');
      let elWrapped = $(el);
      let header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        let offset = element.offset();
        let offsetTop = offset.top;
        let totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


