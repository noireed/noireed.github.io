$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href').substring(1);
        
        $('.content').hide();
        
        $('#' + target).show();
    });
});
