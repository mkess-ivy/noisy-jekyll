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

    // Work Page Hover Feature
    $('.js_hover_trigger').hover(function(){
        $('.js_bg_receiver_work', this).addClass('hover');
    },function(){
        $('.js_bg_receiver_work', this).removeClass('hover');
    });

    // Load More
    $('.image_item:lt(4)').show();
    $('#showLess').hide();
    var items =  8;
    var shown =  4;
    $('#loadMore').click(function () {
        $('#showLess').show();
        shown = $('.image_item:visible').size()+4;
        if(shown< items) {$('.image_item:lt('+shown+')').show();}
        else {
            $('.image_item:lt('+items+')').show();
            $('#loadMore').hide();
        }
    });
    // $('#showLess').click(function () {
    //     $('#myList li').not(':lt(4)').hide();
    // });

    // Bus Stop Tracker Modal
    $('#openModal').hide();
    $('#js-modal-overlay').hide();
    $('#tracker').on('click', function(e) {
        e.preventDefault();
        $('#openModal').fadeIn('modal-show');
        $('#js-modal-overlay').fadeIn('modal-close');
    });
    $('#tracker-close').on('click', function() {
        $('#openModal').css("display","none");
        $('#js-modal-overlay').css("display", "none");
    });

    // Team Member Information
    // see refactored codepen: https://codepen.io/mkess-ivy/pen/LOjxqb
    
    // $('.js-openModalA').hide();
    // $('#btn_more_close',this).hide();
    // $('#btn_moreA').click(function(e) {
    //     e.preventDefault();
    //     $('.js-openModalA').fadeIn('show');
    //     $(this).fadeOut('hide');
    //     $('#btn_more_close').fadeIn('show');
    // });
    // $('#btn_more_close').click(function(e) {
    //     e.preventDefault();
    //     $('.js-openModalA').fadeOut('hide');
    //     $(this).fadeOut('hide');
    //     $('#btn_moreA').fadeIn('show');
    // });
    // $('.js-openModalB').hide();
    // $('#btn_more_closeB',this).hide();
    // $('#btn_moreB').click(function(e) {
    //     e.preventDefault();
    //     $('.js-openModalB').fadeIn('show');
    //     $(this).fadeOut('hide');
    //     $('#btn_more_closeB').fadeIn('show');
    // });
    // $('#btn_more_closeB').click(function(e) {
    //     e.preventDefault();
    //     $('.js-openModalB').fadeOut('hide');
    //     $(this).fadeOut('hide');
    //     $('#btn_moreB').fadeIn('show');
    // });

    // media query event handler
    if (matchMedia) {
      const mq = window.matchMedia("(min-width: 1200px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
      if (mq.matches) {
        // window width is at least 1200px

        // Team Member Information
        // see refactored codepen: https://codepen.io/mkess-ivy/pen/LOjxqb

        $('.js-openModalA').hide();
        $('#btn_more_close',this).hide();
        $('#btn_moreA').click(function(e) {
            e.preventDefault();
            $('.js-openModalA').fadeIn('show');
            $(this).fadeOut('hide');
            $('#btn_more_close').fadeIn('show');
        });
        $('#btn_more_close').click(function(e) {
            e.preventDefault();
            $('.js-openModalA').fadeOut('hide');
            $(this).fadeOut('hide');
            $('#btn_moreA').fadeIn('show');
        });
        $('.js-openModalB').hide();
        $('#btn_more_closeB',this).hide();
        $('#btn_moreB').click(function(e) {
            e.preventDefault();
            $('.js-openModalB').fadeIn('show');
            $(this).fadeOut('hide');
            $('#btn_more_closeB').fadeIn('show');
        });
        $('#btn_more_closeB').click(function(e) {
            e.preventDefault();
            $('.js-openModalB').fadeOut('hide');
            $(this).fadeOut('hide');
            $('#btn_moreB').fadeIn('show');
        });

      } else {
        // window width is less than 1200px
      }

    }

    // site preloader
    $(window).load(function(){
    	$('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

    // Background Image Change on scroll - ABOUT PAGE
    $(window).scroll(function(){
        // var fromTopPx = 50; // distance to trigger
        var scroll = $(window).scrollTop();
        if(scroll >= 500){
            $('.nt_hero_bg').addClass('scrolled');
            $('.nt_hero_bg').removeClass('scrolled-2');

        }else if (scroll >= 450) {
            $('.nt_hero_bg').removeClass('scrolled-3');
            $('.nt_hero_bg').addClass('scrolled-2');
        }else if (scroll >= 400) {
            $('.nt_hero_bg').removeClass('scrolled-4');
            $('.nt_hero_bg').addClass('scrolled-3');
        }else if (scroll >= 350) {
            $('.nt_hero_bg').removeClass('scrolled-5');
            $('.nt_hero_bg').addClass('scrolled-4');
        }else if (scroll >= 300) {
            $('.nt_hero_bg').removeClass('scrolled-6');
            $('.nt_hero_bg').addClass('scrolled-5');
        }else if (scroll >= 250) {
            $('.nt_hero_bg').removeClass('scrolled-7');
            $('.nt_hero_bg').addClass('scrolled-6');
        }else if (scroll >= 200) {
            $('.nt_hero_bg').removeClass('scrolled-8');
            $('.nt_hero_bg').addClass('scrolled-7');
        }else if (scroll >= 150) {
            $('.nt_hero_bg').removeClass('scrolled-9');
            $('.nt_hero_bg').addClass('scrolled-8');
        }else if (scroll >= 100) {
            $('.nt_hero_bg').removeClass('scrolled-10');
            $('.nt_hero_bg').addClass('scrolled-9');
        }else if (scroll >= 50) {
            $('.nt_hero_bg').addClass('scrolled-10');
        }else {
            $('.nt_hero_bg').removeClass('scrolled');
            $('.nt_hero_bg').removeClass('scrolled-2');
            $('.nt_hero_bg').removeClass('scrolled-3');
            $('.nt_hero_bg').removeClass('scrolled-4');
            $('.nt_hero_bg').removeClass('scrolled-5');
            $('.nt_hero_bg').removeClass('scrolled-6');
            $('.nt_hero_bg').removeClass('scrolled-7');
            $('.nt_hero_bg').removeClass('scrolled-8');
            $('.nt_hero_bg').removeClass('scrolled-9');
            $('.nt_hero_bg').removeClass('scrolled-10');
        };
    });

}); // Close of jQuery
