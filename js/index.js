window.onload = function() {

    window.onscroll = function() {

        // *******************    STICKY SOCIAL-BAR    *******************
        var socialBar = document.getElementById("social-bar");

        if (window.pageYOffset) {
            socialBar.classList.add("social-bar-bg");
        } else {
            socialBar.classList.remove("social-bar-bg");
        }

        // *******************    PARALLAX HERO IMG    *******************
        var parallaxElementHero = document.querySelector('.parallax-hero');
        // var parallaxElementBg = document.querySelector('.parallax-bg');
        var scrolled = window.pageYOffset;
        var scrollRateHero = scrolled * 0.4;
        // var scrollRateBg = scrolled * 0.7;


        parallaxElementHero.style.transform = 'translate3d(0px, ' + scrollRateHero + 'px, 0px)';
        // parallaxElementBg.style.transform = 'translate3d(0px, ' + scrollRateBg + 'px, 0px)';

    }

}