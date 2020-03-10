$(function() {
    $('.slider__inner-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__inner_botom'

    });
    $('.slider__inner_botom').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner-top',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 975,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

        ]
    });
    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();
        $('.left').slideToggle();
        $('.rigth').slideToggle();
        $('.header__menu-row').slideToggle();
    });
});