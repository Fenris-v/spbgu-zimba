$(document).ready(() => {
    /**
     * SLICK
     */
    $('.stock__list').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.staff__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * SLICK
     */
    $('.docs').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33.5" cy="33.5" r="27.5" fill="#9F2D20"/><path d="M36.5325 27.3488C36.7143 27.3448 36.8928 27.3976 37.0433 27.4997C37.1938 27.6019 37.3087 27.7485 37.372 27.919C37.4353 28.0895 37.444 28.2754 37.3968 28.451C37.3495 28.6267 37.2487 28.7831 37.1084 28.8988L31.7541 33.4857L37.1084 38.071C37.2055 38.1424 37.2868 38.233 37.3472 38.3372C37.4076 38.4414 37.4459 38.557 37.4596 38.6767C37.4733 38.7964 37.4621 38.9176 37.4268 39.0327C37.3914 39.1479 37.3327 39.2546 37.2543 39.346C37.1758 39.4374 37.0793 39.5116 36.9709 39.564C36.8624 39.6164 36.7443 39.6459 36.6239 39.6505C36.5035 39.6551 36.3835 39.635 36.2713 39.5911C36.1591 39.5472 36.0572 39.4806 35.9719 39.3955L29.8418 34.1505C29.7455 34.0684 29.6682 33.9664 29.6152 33.8515C29.5622 33.7366 29.5348 33.6115 29.5348 33.4849C29.5348 33.3584 29.5622 33.2333 29.6152 33.1184C29.6682 33.0035 29.7455 32.9014 29.8418 32.8192L35.9719 27.5693C36.1268 27.4317 36.3254 27.3535 36.5325 27.3486V27.3488Z" fill="white"/><path d="M33.5 55C21.6259 55 12 45.3741 12 33.5H0C0 52.0015 14.9985 67 33.5 67V55ZM55 33.5C55 45.3741 45.3741 55 33.5 55V67C52.0015 67 67 52.0015 67 33.5H55ZM33.5 12C45.3741 12 55 21.6259 55 33.5H67C67 14.9985 52.0015 0 33.5 0V12ZM33.5 0C14.9985 0 0 14.9985 0 33.5H12C12 21.6259 21.6259 12 33.5 12V0Z" fill="white"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33.5" cy="33.5" r="27.5" fill="#9F2D20"/><path d="M36.5325 27.3488C36.7143 27.3448 36.8928 27.3976 37.0433 27.4997C37.1938 27.6019 37.3087 27.7485 37.372 27.919C37.4353 28.0895 37.444 28.2754 37.3968 28.451C37.3495 28.6267 37.2487 28.7831 37.1084 28.8988L31.7541 33.4857L37.1084 38.071C37.2055 38.1424 37.2868 38.233 37.3472 38.3372C37.4076 38.4414 37.4459 38.557 37.4596 38.6767C37.4733 38.7964 37.4621 38.9176 37.4268 39.0327C37.3914 39.1479 37.3327 39.2546 37.2543 39.346C37.1758 39.4374 37.0793 39.5116 36.9709 39.564C36.8624 39.6164 36.7443 39.6459 36.6239 39.6505C36.5035 39.6551 36.3835 39.635 36.2713 39.5911C36.1591 39.5472 36.0572 39.4806 35.9719 39.3955L29.8418 34.1505C29.7455 34.0684 29.6682 33.9664 29.6152 33.8515C29.5622 33.7366 29.5348 33.6115 29.5348 33.4849C29.5348 33.3584 29.5622 33.2333 29.6152 33.1184C29.6682 33.0035 29.7455 32.9014 29.8418 32.8192L35.9719 27.5693C36.1268 27.4317 36.3254 27.3535 36.5325 27.3486V27.3488Z" fill="white"/><path d="M33.5 55C21.6259 55 12 45.3741 12 33.5H0C0 52.0015 14.9985 67 33.5 67V55ZM55 33.5C55 45.3741 45.3741 55 33.5 55V67C52.0015 67 67 52.0015 67 33.5H55ZM33.5 12C45.3741 12 55 21.6259 55 33.5H67C67 14.9985 52.0015 0 33.5 0V12ZM33.5 0C14.9985 0 0 14.9985 0 33.5H12C12 21.6259 21.6259 12 33.5 12V0Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
        ]
    });
});
