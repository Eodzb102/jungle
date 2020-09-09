$(function() {
    scrollUI();
    scrollGrowth('section article');


    $(window).on('scroll', function() {
        scrollGrowth('.Specialist .introduction');
        scrollGrowth('.Specialist article + article');
        scrollGrowth('.program_process .work_piece');
        scrollGrowth('.program_process .learning_content');
        scrollGrowth('.enrolment .recruit');

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

    function scrollGrowth(selector) {
        var scrollTop = $(document).scrollTop();
        var minScroll = $(selector).offset().top - $(window).height();
        var maxScroll = $(selector).offset().top + $(selector).outerHeight();

    
        // 스크롤 클래스
        if (scrollTop > maxScroll) {
            if ($(selector).hasClass('up') !== true) {
                $(selector).addClass('up');
                $(selector).removeClass('down now');  
            }
        } else if (scrollTop > minScroll) {
            if ($(selector).hasClass('now') !== true) {
                $(selector).addClass('now');
                $(selector).removeClass('up down');
            }
        } else {
            if ($(selector).hasClass('down') !== true ) {
            $(selector).addClass('down');
            $(selector).removeClass('up now');
            }
        }
    }
})