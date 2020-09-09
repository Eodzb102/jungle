$(function() {


    scrollUI();
    scrollGrowth('.main_visual .introduction');
    scrollGrowth('.contents .design_school');
    scrollGrowth('.contents article + article');
    scrollGrowth('.tool_portfolio article:first-child');
    scrollGrowth('.enrolment .recruit');
    scrollGrowth('.class_information');


    $(window).on('scroll', function() {
        scrollGrowth('.main_visual .introduction');
        scrollGrowth('.contents .design_school');
        scrollGrowth('.contents article + article');
        scrollGrowth('.tool_portfolio article:first-child');
        scrollGrowth('.enrolment .recruit');
        scrollGrowth('.class_information');

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
        if ($(window).width() > 768) {
            var minScroll = $(selector).offset().top - $(window).height() / 2 ;
            var maxScroll = $(selector).offset().top + $(selector).outerHeight() ;
        }   else {
            var minScroll = $(selector).offset().top - $(window).height() / 2;
            var maxScroll = $(selector).offset().top + $(selector).outerHeight();
        }

    
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


    
    setImageSlide('.class_information article .image_slide',1)
    function setImageSlide(selector, first) {
        if ($(window).width() < 768) return false;
        var numSlide = $(selector).find('ul.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var onAnimation = false;

        showSlide(slideFirst, 'change');
    
        $(selector).find('.indicator li a').on('click', function() {
            var index = $(selector).find('ul.indicator li').index($(this).parent());
            showSlide(index + 1, 'change');
        });
        $(selector).find('.control a.prev').on('click', function() {
            showSlide(slidePrev, 'prev');
        });
        $(selector).find('.control a.next').on('click', function() {
            showSlide(slideNext, 'next');
        });
    
        function showSlide(n, direction) {
            if (onAnimation === true) return false;
            
            if (direction === 'change') {
                resetSlide(n);
            } else {
                var offsetLeft = 0;
                if (direction === 'prev') {
                    offsetLeft = 100;
                } else if (direction === 'next') {
                    offsetLeft = -100;
                    // console.log('next');
                } else {
                    offsetLeft = 0;
                }
                onAnimation = true;
                $(selector).find('ul.slide').css({'transition': 'left 0.3s', 'left': offsetLeft + '%'}).one('transitionend', function() {
                    resetSlide(n);
                    onAnimation = false;
                });
            }
            
        }
        
        function resetSlide(n) {
            $(selector).find('ul.indicator li').removeClass('on');
            $(selector).find('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n <= 1) ? numSlide : (n - 1);
            slideNext = (n >= numSlide) ? 1 : (n + 1);
            
            $(selector).find('ul.slide').css({'transition': 'none', 'left': 0});
            $(selector).find('ul.slide li').css({'left': 0, 'display': 'none'});
            $(selector).find('ul.slide li:eq(' + (slideNow - 1) + ')').css({'left': 0, 'display': 'block'});
            $(selector).find('ul.slide li:eq(' + (slidePrev - 1) + ')').css({'left': '-100%', 'display': 'block'});
            $(selector).find('ul.slide li:eq(' + (slideNext - 1) + ')').css({'left': '100%', 'display': 'block'});
        }
    }

    setSwipeSlide('.class_information article .image_slide',1)
    function setSwipeSlide(selector, first) {
        if ($(window).width() > 768) return false;
        var numSlide = $(selector).find('ul.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var startX = 0;
        var startY = 0;
        var delX = 0;
        var delY = 0;
        var offsetX = 0;
        var direction = '';

        $(selector).find('ul.slide li').each(function(i) {
            $(this).css({'left': (i * 100) + '%', 'display': 'block'});
        });

        showSlide(slideFirst);
    
        $(selector).find('ul.indicator li a').on('click', function() {
            var index = $(selector).find('ul.indicator li').index($(this).parent());
            showSlide(index + 1);
        });
        $(selector).find('.control a.prev').on('click', function() {
            showSlide(slidePrev);
        });
        $(selector).find('.control a.next').on('click', function() {
            showSlide(slideNext);
        });

        
        // swipe
        $(selector).find('ul.slide').on('touchstart', function(e) {
            $(selector).find('p.control span.bar').stop(true).css({'width': 0});
            $(selector).find('ul.slide').css({'transition': 'none'});
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            offsetX = $(this).position().left;
            
            document.addEventListener('touchmove', touchMove, {passive: false});
            
            $(document).on('touchend', function() {
                if (delX < -50 && slideNow !== numSlide) {
                    showSlide(slideNext);
                } else if (delX > 50 && slideNow !== 1) {
                    showSlide(slidePrev);
                } else {
                    showSlide(slideNow);
                }
                direction = '';
                
                document.removeEventListener('touchmove', touchMove);
                $(document).off('touchend');
            });
        });
        
        function touchMove(e) {
            delX = e.touches[0].clientX - startX;
            delY = e.touches[0].clientY - startY;
            if (direction === '') {
                e.preventDefault();
                if (Math.abs(delX) > 5) {
                    direction = 'horizon';
                } else if (Math.abs(delY) > 5) {
                    direction = 'vertical';
                }
            } else if (direction === 'horizon') {
                e.preventDefault();
                if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
                    delX = delX / 10;
                }
                $(selector).find('ul.slide').css({'left': (offsetX + delX) + 'px'});
            } else if (direction === 'vertical') {
                delX = 0;
            }
        }
    
        function showSlide(n) {
            $(selector).find('.control span.bar').stop(true).css({'width': 0});
            if (slideNow === 0) {
                $(selector).find('ul.slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
            } else {
                $(selector).find('ul.slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
            }
            $(selector).find('ul.indicator li').removeClass('on');
            $(selector).find('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n - 1) < 1 ? numSlide : n - 1;
            slideNext = (n + 1) > numSlide ? 1 : n + 1;
            //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);

        }
    } 
})