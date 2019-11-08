var swiper = new Swiper('.swiper-container1', {
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    loop: true,
});

var galleryThumbs = new Swiper('.gallery-thumbs', {

    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    loopedSlides: 5,
    slideToClickedSlide: true,
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 5,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;