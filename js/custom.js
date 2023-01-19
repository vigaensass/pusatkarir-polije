$(window).scroll(function() {
    // console.log($(document).scrollTop());
    if ($(document).scrollTop() > 50) {
        // $('header').removeClass('position')
        $('nav').addClass('bg-info')
        $('header').removeClass('carousel');
    } else {
        $('nav').addClass('bg-transparent');
        $('header').addClass('carousel');

        $('nav').removeClass('bg-info');
    }
});