(function( window, $ ) {
    $(document).ready(function() {
        // Assign target to appropriate links
        $('a[rel="external"], a[rel="social"], a[rel="download"]').click(function() {
            this.target = '_blank';
        });

        // Assign javascript:void(0); to links with # as href
        /*jshint scripturl:true*/
        $('a[href="#"]').attr( 'href', 'javascript:;' );
    });
})( window, jQuery );