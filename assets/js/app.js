
$('.main-tilt-container').tilt({
	'transform-style': 'preserve-3d'
});

$('.logo').tilt({
	'transform': 'translateZ(20px)'
});

$(document).ready(function(){
    $("button").click(function(){
        $(".contact-form").addClass("active");
    });

    $(".close-form").click(function(){
        $(".contact-form").removeClass("active");
    });
});