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

    // site preloader
    $(window).load(function(){
    	$('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

}); // Close of jQuery
