$(document).ready(function () {

    //kr버튼
    $(".lang-kr").click(function () {
        $(".lang-other").toggleClass("active");
    });


    //메인 슬라이드
    var myswiper = new Swiper('.swiper-container.slide01', {
        //cssMode: true,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        //      mousewheel: true,
        effect: 'fade',
        keyboard: true,
        loop: true,
        autoplay: true,
        speed: 500,

        // slidesPerView: 3,
        // spaceBetween: 30,





    });







    //슬라이드 멈춤 버튼

    $(".start").click(function () {
        $(".stop").addClass("active");
        $(".start").addClass("active");
        myswiper.autoplay.stop();
    });

    $(".stop").click(function () {
        $(".start").removeClass("active");
        $(".stop").removeClass("active");
        myswiper.autoplay.start();
    });






    //돋보기 눌렀을때
    $(".search").click(function () {
        $(".search-popup").toggleClass("active");
    });
    $(".search-popup > .X-btn").click(function () {
        $(".search-popup").toggleClass("active");
    });






    //햄버거 안 메뉴
    $(".menu-2-depth > .right-menu > .nav-box > ul > li").click(function () {

        if ($(this).hasClass("active") == true) {
            $(this).removeClass("active");
        } else if ($(this).hasClass("active") == false) {

            $(".menu-2-depth > .right-menu > .nav-box > ul > li").removeClass("active");
            $(this).addClass("active");
        }
    });

    //햄버거 버튼 눌렀을때
    $(".header-box > .hamburger").click(function () {
//        $(".menu-2-depth").toggleClass("active");
        $(".menu-2-depth").addClass("active");
    });
    $(".menu-2-depth > .right-menu > .X-btn, .menu-2-depth").click(function () {
        $(".menu-2-depth").removeClass("active");
    });

    // esc키 눌렀을 때 팝업 꺼지는 제이쿼리
    $(window).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".menu-2-depth").removeClass("active");
        }
    });






    //2번째 슬라이드
    var swiper = new Swiper('.swiper-container.slide02', {

        slidesPerView: 'auto',
        spaceBetween: 50,
        autoplay: {
            delay: 1000,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        }


    });




    //3번째 슬라이드
    var swiper = new Swiper('.swiper-container.slide03', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        effect: 'fade',
        keyboard: true,
        loop: true,

    });




    //3번째 슬라이드연동1
    var Mainswiper = new Swiper('.swiper-container.slide04.cell', {


        autoplay: true,
        speed: 500,
        effect: 'slide',
        keyboard: true,
        loop: true,

    });



    //3번째 슬라이드연동2
    var Subswiper = new Swiper('.swiper-container.slide05.cell', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: true,
        speed: 500,
        effect: 'fade',
        keyboard: true,
        loop: true,

    });


    Mainswiper.controller.control = Subswiper;
    Subswiper.controller.control = Mainswiper;




    //마우스 스크롤 시 메뉴 바탕색 생성
    $(function () {
        var $header = $('header'); //헤더를 변수에 넣기
        var $page = $('header .header-box'); //색상이 변할 부분
        var $window = $(window);
        var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기

        $window.resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
            pageOffsetTop = $page.offset().top;
        });

        $window.on('scroll', function () { //스크롤시
            var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
            $header.toggleClass('down', scrolled); //클래스 토글
        });
    });





    //올라가기 버튼  
    $(function () {


        $("footer > .footer-wrap > .btn-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });









});
