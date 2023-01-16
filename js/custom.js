$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').removeClass('transparent');
        $('header').removeClass('position')
    } else {
        $('header').addClass('position')
        $('nav').addClass('transparent');
    }
});