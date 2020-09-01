/* mobile nav */

$(".hamburger-menu").click(function() {
    var nav = $(".nav-menu");
    var icon = $(".hamburger");

    nav.slideToggle(200);
});

/* smooth scroll */

$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {

      if ($(window).width() < 480) {
          $(".nav-menu").slideToggle();
      }

      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  })