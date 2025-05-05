// Down Arrow Scroll
function arrowScroll() {
    const arrow = document.querySelector('.down-arrow');
    const el = document.querySelector('main');
    
    arrow.addEventListener('click', function () {
        el.scrollIntoView({behavior: 'smooth'});
    });
}
arrowScroll();
swup.on('contentReplaced', arrowScroll);