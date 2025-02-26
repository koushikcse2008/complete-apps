jQuery(function () {
    jQuery('.navbar-toggle-sidebar').click(function () {
        jQuery('.navbar-nav').toggleClass('slide-in');
        jQuery('.side-body').toggleClass('body-slide-in');
        jQuery('#search').removeClass('in').addClass('collapse').slideUp(200);
    });

    jQuery('#search-trigger').click(function () {
        jQuery('.navbar-nav').removeClass('slide-in');
        jQuery('.side-body').removeClass('body-slide-in');
        jQuery('.search-input').focus();
    });
});