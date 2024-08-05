$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Trigger progress bars animation on scroll
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('#skills .progress-bar').each(function() {
            var skillTop = $(this).offset().top - window.innerHeight;
            if (scrollTop > skillTop) {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            }
        });
    });
});
