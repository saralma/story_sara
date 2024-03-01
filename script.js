document.addEventListener('DOMContentLoaded', function() {
    const parallaxImages = document.querySelectorAll('.story-part.parallax .background-image');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        parallaxImages.forEach(function(img) {
            let depth = img.parentElement.getAttribute('data-depth');
            let movement = (scrollPosition * depth) + 'px';
            img.style.transform = 'translateY(' + movement + ')';
        });
    });
});
