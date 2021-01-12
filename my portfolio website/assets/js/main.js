$(document).ready(function () {
   
    var typed = new Typed('.type', {
        strings: ['FREELANCER', 'WEB DESIGNER' , 'WORDPRESS DEVELOPER'],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    });
    
 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
     $('#bar1').barfiller({
        barColor: "#3dcfd3"
    });
    $('#bar2').barfiller({
        barColor: "#3dcfd3"
    });
    $('#bar3').barfiller({
        barColor: "#3dcfd3"
    });
    $('#bar4').barfiller({
        barColor: "#3dcfd3"
    });
     new WOW().init();
})