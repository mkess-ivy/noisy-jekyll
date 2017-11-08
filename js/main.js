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

    // Main Overlay Menu Functionality
    $("#overlay-menu").click(function() {
        $(".overlay").addClass("overlay-open");
        $('body').addClass("noScroll");
    });

	$(".overlay-close").click(function() {
        $(".overlay").removeClass("overlay-open");
        $('body').removeClass("noScroll");
    });

    // Slider for Projects
    $('.hero-slider').slick({
        autoplay: false,
        arrows: true,
        infinite: false,
        fade: true,
        speed: 500,
        dots: false,
        cssEase: 'linear',
        nextArrow: '<img src="/img/right_arrow.png" class="slick-next" />',
        prevArrow: '<img src="/img/left_arrow.png" class="slick-prev" />'
    });

    // Load More
    $('.image_item:lt(4)').show();
    // $('#showLess').hide();
    var items =  8;
    var shown =  4;
    $('#loadMore').click(function () {
        // $('#showLess').show();
        shown = $('.image_item:visible').size()+4;
        if(shown< items) {$('.image_item:lt('+shown+')').show();}
        else {
            $('.image_item:lt('+items+')').show();
            $('#loadMore').hide();
        }
    });
    // $('#showLess').click(function () {
    //     $('#myList li').not(':lt(3)').hide();
    // });

    // Bus Stop Tracker Modal
    $('#openModal').hide();
    $('#js-modal-overlay').hide();
    $('#tracker').on('click', function(e) {
        e.preventDefault();
        $('#openModal').fadeToggle('show');
        $('#js-modal-overlay').fadeToggle('close');
    });
    $('#tracker-close').on('click', function() {
        $('#openModal').css("display","none");
        $('#js-modal-overlay').css("display", "none");
    })

    // site preloader
    $(window).load(function(){
    	$('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

	// Slow Reveal
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

    // Work Page Hover Feature
    $(".js_hover_trigger").hover(function(){
        $(".js_bg_receiver_work", this).addClass('hover');
    },function(){
        $(".js_bg_receiver_work", this).removeClass('hover');
    });


    // Reveal the bottom portion of footer at bottom of page
    if ($(window).width() < 900) {
        // Reveal Footer Credits after certain scroll pointer
        $(window).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 75) {
                $('.site_footer').css("bottom", "10px");
            } else {
                $('.site_footer').css("bottom", "-95px");
            }

        });
    }

    // CoverVid
    $('.covervid-video').coverVid();

    // Reveal Back to top icon after certain scroll height
    // $('#js-backtop').hide();
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 100) {
    //         $('#js-backtop').fadeIn("slow");
    //     }
    //     else {
    //         $('#js-backtop').fadeOut("fast");
    //     }
    // });

    // Reveal Footer
    // $('footer').footerReveal({ shadow: false, zIndex: -101 });

    // View Work Hover Feature (may not need this functionality)
    // $(".js-background-trigger").hover(function(){
    //     $(".js-background-receiver", this).addClass('hover');
    // },
    // function(){
    //     $(".js-background-receiver", this).removeClass('hover');
    // });

    // Noisy Filter for Image
    // var options = {
    // "animate": true,
    // "patternWidth": 350.4,
    // "patternHeight": 500,
    // "grainOpacity": 0.17,
    // "grainDensity": 1.5,
    // "grainWidth": 1,
    // "grainHeight": 1
    // }
    // grained("#noise-filter", options);

    // Content Slider (can be deleted)
    // $('.content_slider').slick({
    //     autoplay: false,
    //     arrows: true,
    //     infinite: true,
    //     fade: true,
    //     speed: 500,
    //     dots: false,
    //     cssEase: 'linear'
    // });

    // Slick Slider (this can be deleted)
	// $('.nt_slider').slick({
    //     autoplay: true,
    //     autoplaySpeed: 4500,
    //     arrows: true,
    //     infinite: true,
    //     fade: true,
    //     speed: 900,
    //     dots: true,
    //     cssEase: 'linear',
    //     prevArrow: $('#mypreviousbutton'),
    //     nextArrow: $('#mynextbutton')
	// });


}); // Close of jQuery
