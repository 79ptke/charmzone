$(document).ready(function () {

    //메뉴바 스크롤 시 색상 변화
    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 100) {
            $("header").addClass('down');
        } else {
            $("header").removeClass('down');
        }

    });
    
    
    
    
    
    //kr버튼
    $(".lang-kr").click(function () {
        $(".lang-other").toggleClass("active");
    });





    //돋보기 눌렀을때
    $(".search").click(function () {
        $(".search-popup").toggleClass("active");
    });
    $(".search-popup > .X-btn").click(function () {
        $(".search-popup").toggleClass("active");
    });





    //햄버거 버튼 눌렀을때
    $(".header-box > .hamburger").click(function () {
        $(".menu-2-depth").addClass("active");
        $(".menu-2-depth > .right-menu").addClass("active");
    });
    $(".menu-2-depth > .left-menu,.menu-2-depth > .right-menu > .X-btn").click(function () {
        $(".menu-2-depth").removeClass("active");
        $(".menu-2-depth > .right-menu").removeClass("active");
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





    // esc키 눌렀을 때 팝업 꺼지는 제이쿼리
    $(window).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".menu-2-depth").removeClass("active");
        }
    });





    //메인 슬라이드
    var myswiper = new Swiper('.swiper-container.slide01', {

        effect: 'fade',
        keyboard: true,
        loop: true,
        autoplay: true,
        speed: 500,

        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
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

        autoplay: true,
        speed: 500,
        effect: 'fade',
        keyboard: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    Mainswiper.controller.control = Subswiper;
    Subswiper.controller.control = Mainswiper;






    //올라가기 버튼  
    $(function () {
        $("footer > .footer-wrap > .btn-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });




    //FAMILYSITE버튼

    $("footer > .footer-wrap > .link-wrap > .familysite > .open").click(function () {

        $("footer > .footer-wrap > .link-wrap > .familysite").addClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > .open").addClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > .close").addClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > ul").addClass('on');

    });
    $("footer > .footer-wrap > .link-wrap > .familysite > .close").click(function () {

        $("footer > .footer-wrap > .link-wrap > .familysite").removeClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > .open").removeClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > .close").removeClass('on');
        $("footer > .footer-wrap > .link-wrap > .familysite > ul").removeClass('on');

    });

});
