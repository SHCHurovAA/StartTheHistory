const slider = tns({
    container: '.reviews__review-list',
    items: 1.2,
    slideBy: 1,
    fixedWidth: 290,
    mouseDrag: true,
    responsive: {
        640: {
            items: 1.2
        },
        700: {
            items: 3,
        },
        900: {
            items: 4,
            fixedWidth: 328,
        }
    },

    autoplay: false,
    controls: false,
    nav: false
});