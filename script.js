$(document).ready(function() {

    $('.js-welcome').waypoint(function(direction) {
        if (direction == "down") {
            $('nav.navigation-container').addClass('navigation-container-sticky');
        } else {
            $('nav.navigation-container').removeClass('navigation-container-sticky');
            
        }
        
    });
    /*var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
        }, {
        offset: '25%'
        })*/

});