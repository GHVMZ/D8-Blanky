jQuery(document).ready(function($) {
    
    // TOGGLE MENU
    jQuery('.toggle').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.nav').slideToggle('active');
 
        e.preventDefault();
    });

    // SCROLL TO TOP
    jQuery("a[href='#top']").click(function() {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
    });
});