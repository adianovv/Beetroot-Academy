let swiperHeader = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let guitarSwiper = new Swiper(".guitarSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".guitar-next",
        prevEl: ".guitar-prev",
    },
});

let partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 9,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".partners-arrow-next",
        prevEl: ".partners-arrow-prev",
    },
});