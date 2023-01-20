$(window).scroll(function() {
    // console.log($(document).scrollTop());
    if ($(document).scrollTop() > 50) {
        // $('header').removeClass('position')
        $('.navbar').addClass('bg-info')
        $('header').removeClass('carousel');
    } else {
        $('.navbar').addClass('bg-transparent');
        $('header').addClass('carousel');

        $('.navbar').removeClass('bg-info');
    }
});