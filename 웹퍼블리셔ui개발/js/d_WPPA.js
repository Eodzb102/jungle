$(function() {
  

    scrollUI();
    scrollGrowth('.main_visual .introduction');
    scrollGrowth('.main_visual .portfolio_process');
    scrollGrowth('.make_portfolio article:nth-child(1)');
    scrollGrowth('.enrolment .recruit');


    $(window).on('scroll', function() {
        scrollGrowth('.main_visual .introduction');
        scrollGrowth('.main_visual .portfolio_process');
        scrollGrowth('.make_portfolio article:nth-child(1)');
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

    // 배너 슬라이드 시작
    setBannerSlide('.make_portfolio .sw_banner_slide');

    function setBannerSlide(selector) {
        if ($(window).width() < 768) return false;
        var offsetLeft = 0;
        var boxWidth = $(selector).find('.slide').innerWidth();
        var barWidth = 0;
        var minOffsetLeft = 0;
        var numBanner = $(selector).find('.slide li').length;
        var bannerNow = 0;
        var bannerPrev = 0;
        var bannerNext = 0;
        var numStep = 0;
        var numPage = 0;

        
        setBannerStatus();
        showBanner(1);
        
        // 이벤트
        $(selector).find('.control .prev').on('click', function() {
            showBanner(bannerPrev);
        });
        $(selector).find('.control .next').on('click', function() {
            showBanner(bannerNext);
        });


        $(window).on('resize', function() {
            setBannerStatus();
        });
        
        function setBannerStatus() {
            boxWidth = $(selector).find('.box').innerWidth();
            barWidth = 0;
            $(selector).find('.slide li').each(function(i) {
                barWidth += $(this).outerWidth(true);
                if (barWidth <= boxWidth) {
                    numStep = (i + 1);
                }
            });

            numPage = Math.ceil(numBanner / numStep);
            
            barWidth = 0;
            $(selector).find('.slide li').each(function(i) {
                barWidth += $(this).outerWidth(true);
                $(this).css({'left': (104 * i) + '%'});
            });

            minOffsetLeft = boxWidth - barWidth;

            $(selector).find('.slide li').each(function(i) {
                if (-$(this).position().left <= minOffsetLeft) {
                    numBanner = (i + 1);
                    // return false;
                }
            });
            
            if (bannerNow !== 0) {
                if (bannerNow > numBanner) bannerNow = numBanner;
                showBanner(bannerNow);
            }
        }
        
        function showBanner(n) {
            offsetLeft = -$(selector).find('.slide li:eq(' + (n - 1) + ')').position().left;
            $(selector).find('.slide').css({'transition': 'left 0.3s', 'left': offsetLeft + 'px'});
            bannerNow = n;
            bannerPrev = (n <= 1) ? bannerNow : (n - 1);
            bannerNext = (n >= numBanner) ? bannerNow : (n + 1);
            // console.log(bannerPrev + ' / ' + bannerNow + ' / ' + bannerNext);

        }
        
    }
    

    // 스크롤 애니메이션
    function scrollGrowth(selector) {
        var scrollTop = $(document).scrollTop();
        var minScroll = $(selector).offset().top - $(window).height() / 4;
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

    // 모바일 스와이프
    setSwipeSlide('.class_information article .image_slide',1)
    setSwipeSlide('.make_portfolio .sw_banner_slide',1);

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
        var isTouched = false;
        var direction = '';

        // 초기화
        $(selector).find('ul.slide li').each(function(i) {
            $(this).css({'left': ( i * 104 ) + '%','display': 'block'});
            // $(this).css({'left': (i * 100) + '%', 'display': 'block'});
        });

        showSlide(slideFirst);

        $(selector).find('ul.indicator li a').on('click', function() {
            var index = $(selector).find('ul.indicator li').index($(this).parent());
            showSlide(index + 1);
        });
        $(selector).find('p.control a.prev').on('click', function() {
            showSlide(slidePrev);
        });
        $(selector).find('p.control a.next').on('click', function() {
            showSlide(slideNext);
        });
 
        
        // swipe
        $(selector).find('ul.slide').on('touchstart', function(e) {
            $(selector).find('ul.slide').css({'transition': 'none'});
            isTouched = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            offsetX = $(this).position().left;
        });
        document.addEventListener('touchmove', function(e) {
            if (isTouched === true) {
                delX = e.touches[0].clientX - startX;
                delY = e.touches[0].clientY - startY;
                if (direction === '') {
                    //e.preventDefault();
                    if (Math.abs(delX) > 5) {
                        direction = 'horizon';
                    } else if (Math.abs(delY) > 5) {
                        direction = 'vertical';
                    }
                } else if (direction === 'horizon') {
                    e.preventDefault();
                    if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
                        console.log('dd')
                        delX = delX / 10;
                    }
                    $(selector).find('ul.slide').css({'left': (offsetX + delX) + 'px'});
                } else if (direction === 'vertical') {
                    delX = 0;
                }
            }
        }, {passive: false});
        $(document).on('touchend', function() {
            if (isTouched === true) {
                if (delX < -50 && slideNow !== numSlide) {
                    showSlide(slideNext);
                } else if (delX > 50 && slideNow !== 1) {
                    showSlide(slidePrev);
                } else {
                    showSlide(slideNow);
                }
                isTouched = false;
                direction = '';
            }
        });

        function showSlide(n) {
            if (slideNow === 0) {
                $(selector).find('ul.slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
            } else {
                $(selector).find('ul.slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 104) + '%'});
            }
            /*
            if (slideNow === 0) {
                $(selector).find('ul.slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
            } else {
                $(selector).find('ul.slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
            }
            */
            $(selector).find('ul.indicator li').removeClass('on');
            $(selector).find('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n - 1) < 1 ? numSlide : n - 1;
            slideNext = (n + 1) > numSlide ? 1 : n + 1;
            //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);

        }
    }

})