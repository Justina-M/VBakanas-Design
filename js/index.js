window.onload = function() {

    window.onscroll = function() {

        // *******************    STICKY SOCIAL-BAR    *******************
        var socialBar = document.getElementById("social-bar");
        var media769px = window.matchMedia("(min-width: 769px)");
        addRemoveSocialBar(media769px);
        media769px.addListener(addRemoveSocialBar);

        function addRemoveSocialBar(media769px) {
            if (media769px.matches) {
                if (window.pageYOffset) {
                    socialBar.classList.add("social-bar-bg");
                } else {
                    socialBar.classList.remove("social-bar-bg");
                }
            }
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

    // *******************    DISABLE LIGHTBOX ON MOBILE    *******************
    var media576px = window.matchMedia("(max-width: 576px)");
    removeLightbox(media576px);
    media576px.addListener(removeLightbox);
    
    function removeLightbox(media576px) {
        if (media576px.matches) {
            // function removeAttributes(element, ...attrs) {
            //     attrs.forEach(attr => element.removeAttribute(attr))
            // }
            // removeAttributes(document.querySelector('.section__gallery--item'), 'href', 'data-lightbox');
            var galleryItem = document.getElementsByClassName('section__gallery--item');

            for (i = 0; i < galleryItem.length; i++) {
                galleryItem[i].removeAttribute('href');
                galleryItem[i].removeAttribute('data-lightbox');

            }
        } 
    }

    // var userAgent = navigator.userAgent.toString().toLowerCase();
    // if(userAgent.indexOf('crios') != -1) { 
    //     alert('you are using chrome for ios');
    // }

}