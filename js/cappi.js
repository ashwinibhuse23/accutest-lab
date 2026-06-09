 var swiper2 = new Swiper(".regulatorySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    speed: 900,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
