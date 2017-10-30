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

/*script edited from https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2620092?start=525*/