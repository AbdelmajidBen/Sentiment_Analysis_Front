jQuery(document).ready(function($) {
    // Function to handle responsive behavior of the navigation bar
    function updateNavbar() {
        var path = window.location.pathname;
        $('#navbarSupportedContent ul.navbar-nav li').removeClass('active');
        $('#navbarSupportedContent ul.navbar-nav li a[href="' + path + '"]').parent().addClass('active');

        // Update horizontal selector position
        var activeItem = $('#navbarSupportedContent ul.navbar-nav li.active');
        if (activeItem.length) {
            var activeWidth = activeItem.innerWidth();
            var activeHeight = activeItem.innerHeight();
            var itemPosTop = activeItem.position().top;
            var itemPosLeft = activeItem.position().left;

            $(".hori-selector").css({
                "top": itemPosTop + "px",
                "left": itemPosLeft + "px",
                "height": activeHeight + "px",
                "width": activeWidth + "px"
            });
        }
    }

    // Call updateNavbar() initially and on window load
    updateNavbar();

    // Call updateNavbar() again on window resize to handle responsive updates
    $(window).on('resize', function() {
        setTimeout(function() {
            updateNavbar();
        }, 500);
    });

    // Toggle the navbar collapse on clicking the navbar toggler button
    $(".navbar-toggler").click(function() {
        $(".navbar-collapse").slideToggle(300, function() {
            updateNavbar();
        });
    });
});
