$(document).ready(function() {
    // $('.project-case a[id]').map(function() {
    //     $(this).click(function(event) {
    //         event.preventDefault();
    //         // hide all open project case details
    //         $('.project-detail').hide();
    //         // show on click
    //         var elements_to_show = $('*[data-id="' + $(this).attr('id') + '"]');
    //         elements_to_show.show();
    //         return false;
    //     });
    // });

    $('.royalSlider.marlene').royalSlider({
        captionShowEffects:["moveleft", "fade"],
        directionNavEnabled: true,
        directionNavAutoHide: false,
        /* autoScaleSlider: true, */
        beforeLoadStart:function() {                    
            this.arrowLeft.html('previous');
            this.arrowRight.html('next');
        },
    });

    $('#tweets').tweetable({
        username: 'mschufferth', 
        time: true,
        rotate: false,
        speed: 4000, 
        limit: 1,
        replies: false,
        position: 'append',
        failed: "Sorry, twitter is currently unavailable.",
        html5: true,
        onComplete:function($ul){
            $('time').timeago();
        }
    });
});

