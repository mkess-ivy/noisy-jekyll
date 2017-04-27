$(document).ready(function(){
	
  // Smooth Scroll
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  
  // Overlay Menu Functionality
	$("#overlay-menu").click(function() {
    $(".overlay").addClass("overlay-open");
    $('body').addClass("noScroll");
  });

	$(".overlay-close").click(function() {
    $(".overlay").removeClass("overlay-open");
    $('body').removeClass("noScroll");
  });

	// Slick Slider
	$('.nt_slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    dots: true,
    cssEase: 'linear'
	});

  // site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	/* Slow Reveal -- Every time the window is scrolled, since we are also using the Reveal Footer, this might not actually be activated ... */
  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hideme').each( function(i){     
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
            
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){  
        $(this).animate({'opacity':'1'},700);
      }     
    }); 
  });

   // Reveal Back to top icon after certain scroll height
  $('#js-backtop').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#js-backtop').fadeIn("slow");
    }
    else {
      $('#js-backtop').fadeOut("fast");
    }
  });

  // Reveal Footer
  $('footer').footerReveal({ shadow: false, zIndex: -101 });

}); // Close of jQuery