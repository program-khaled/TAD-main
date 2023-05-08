new WOW().init();
$(document).ready(function () {
    // --------------------------------------------
    $(".bar").click(function (e) {
        e.preventDefault();
        $(".nav-bars-icons").fadeToggle(2000,"linear");
    });
    $(".close").click(function () {
        $(".nav-bars-icons").fadeToggle(3000, "linear");
    });
    // --------------------------------------------
    $(window).on('scroll', function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 70) {
                $('nav').addClass('nav-scroll');
                $('.nav-scroll').css('top','0px');
            } else {
                $('nav').removeClass('nav-scroll');
            }
        });
    });
    // --------------------------------------------

    $('nav .content ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    // --------------------------------------------
});