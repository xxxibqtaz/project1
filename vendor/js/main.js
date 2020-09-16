var tittle_svg = anime.timeline()
text_header = document.querySelector('.text-banner');
menu_change = document.querySelector('.menu-navbar');
svg_text = document.querySelectorAll('.svg-text');
tittle_svg.add({
    targets: '.recording path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    duration: 4000,
    delay: 1000,
    loop: 1
})
charming(text_header, {
    classPrefix: 'chu'
});

var cd1 = anime({
    targets: '.text-banner span',
    opacity: [0, 1],
    translateY: [-300, 0],
    delay: function(el, i) {
            return i * 100
        }
        // },
        // loop: true,
        // direction: 'alternate'
})
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        menu_change.classList.add('menu-change');
    } else {
        menu_change.classList.remove('menu-change')
    }
})
// for (let i = 0; i < svg_text.length; i++) {

//     svg
// }