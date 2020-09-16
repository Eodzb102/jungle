$(function() {
    $(document).ready(function(){
        preventDefaultAnchor();
    });
    
    
    function preventDefaultAnchor() {
        $(document).on('click', 'a[href="#"]', function(e) {
            e.preventDefault();
        });
    }
    
    scrollUI();
    
    $(window).on('scroll', function() {
        scrollUI();
    });
    
    function scrollUI() {
        var scrollTop = $(document).scrollTop();
        var footerHeight = $('#footer').offset().top -$(window).height(); 
        if(scrollTop > footerHeight) {
            $('.fixed_bar').addClass('off');
        }  else if (scrollTop < footerHeight) {
            $('.fixed_bar').removeClass('off');
        }
    }

})




