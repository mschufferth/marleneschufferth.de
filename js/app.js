$(document).ready(function() {
    $('.project-case a[id]').map(function() {
        $(this).click(function(event) {
            event.preventDefault();
            // hide all open project case details
            $('.project-detail').hide();
            // show on click
            var elements_to_show = $('*[data-id="' + $(this).attr('id') + '"]');
            elements_to_show.show();
            return false;
        });
    });
});

