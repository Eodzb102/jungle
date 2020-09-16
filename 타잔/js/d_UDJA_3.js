$(function() {

    $('.after_learning .portfolio .slide_on_btn span a').on('click', function() {
        var index = $('.after_learning .portfolio .slide_on_btn span').index($(this).parent());
        $('.after_learning .portfolio .banner_slide .slide').removeClass('on');
        $('.after_learning .portfolio .banner_slide .slide:eq(' + index +' )').addClass('on');
        $('.after_learning .portfolio .banner_slide').removeClass('on');
        // $('.after_learning .portfolio .banner_slide:eq(' + index +' )').addClass('on');
        // $('.after_learning .portfolio .slide_on_btn span').removeClass('on');
        $(this).parent('span').addClass('on');
    });

    $('.fixed_bar .bg_black .check_required a').on('click', function() {
        $('.fixed_bar .bg_black').toggleClass('on');
    });

    $('.curriculum .container > ol > li > a').on('click', function() {
        $(this).parent('li').toggleClass('on');
    });

    $('.faq ul li a').on('click', function() {
        $(this).parent('li').toggleClass('on');
    });

    scrollUI();

    $(window).on('scroll', function() {
        scrollUI();
    });

    // 밑에 bar scroll 
    function scrollUI() {
        var scrollTop = $(document).scrollTop();
        var footerHeight = $('#footer').offset().top -$(window).height(); 
        if(scrollTop > footerHeight) {
            $('.fixed_bar').addClass('off');
        }  else if (scrollTop < footerHeight) {
            $('.fixed_bar').removeClass('off');
        }
    }

    // scroll event
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


    // 이미지 무한 슬라이드
    setImageSlide('.tarzan_about .apply .image_slide',1)
    function setImageSlide(selector, first) {
        if ($(window).width() < 768) return false;
        var numSlide = $(selector).find('.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var onAnimation = false;
    
  
        showSlide(slideFirst, 'change');
    
        $(selector).find('.indicator li a').on('click', function() {
            var index = $(selector).find('ul.indicator li').index($(this).parent());
            showSlide(index + 1, 'change');
            alert('?')
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

    // 모바일 스와이프 슬라이드
    // setSwipeSlide('.dino_about .apply .image_slide',1)
    // setSwipeSlide('.dino_about .learn .banner_slide',1)
    // setSwipeSlide('.after_learning .portfolio .banner_slide',1)
    function setSwipeSlide(selector, first) {
        if ($(window).width() > 768) return false;
        var numSlide = $(selector).find('ul.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var isTimerOn = status;
        var startX = 0;
        var startY = 0;
        var delX = 0;
        var delY = 0;
        var offsetX = 0;
        var isTouched = false;
        var direction = '';

        // 초기화
        $(selector).find('ul.slide li').each(function(i) {
            $(this).css({'left': (i * 100) + '%', 'display': 'block'});
        });
        if (isTimerOn === true) {
            $(selector).find('p.control a.play').addClass('on');
        } else {
            $(selector).find('p.control a.play').removeClass('on');
        }
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
            $(selector).find('p.control span.bar').stop(true).css({'width': 0});
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

    // 배너 슬라이드 
    setBannerSlide('.tarzan_about .learn .banner_slide', 30);
    setBannerSlide('.after_learning .portfolio .banner_slide:nth-of-type(1)', 0);
    setBannerSlide('.review .text_review .banner_slide', 30);
    function setBannerSlide(selector, left) {
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
        var marginLeft = left;

        
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
                $(this).css({'left': (100 * i) + '%'});
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
            offsetLeft = -$(selector).find('.slide li:eq(' + (n - 1) + ')').position().left ;
            if (bannerNow === 0) {
                $(selector).find('.slide').css({'transition': 'left 0.3s', 'left': offsetLeft  + 'px'});
            } else {
                $(selector).find('.slide').css({'transition': 'left 0.3s', 'left': (offsetLeft - marginLeft )+ 'px'});
            }
            bannerNow = n;
            bannerPrev = (n <= 1) ? bannerNow : (n - 1);
            bannerNext = (n >= numBanner) ? bannerNow : (n + 1);
            // console.log(bannerPrev + ' / ' + bannerNow + ' / ' + bannerNext);

        }
        
    }

})