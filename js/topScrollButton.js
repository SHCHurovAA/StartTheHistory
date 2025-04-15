const topScrollButton = document.querySelector('#topScrollButton');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        topScrollButton.classList.add("scroll-button--visible")
    } else {
        topScrollButton.classList.remove("scroll-button--visible")
    }
});