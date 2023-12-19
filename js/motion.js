$('video').on('mouseenter', function(){
    this.play();
});

$('video').on('mouseleave', function(){
    this.pause();
});

function startExplosion() {

    $("#poof").removeClass("d-none");

    setTimeout(() => {
        window.location.href="brandboard.html";
    }, 1000)
};

$(window).on('load', function(){
    setTimeout(function() {
        $(".col-transition-1").removeClass("top-0");
        $(".col-transition-1").addClass("col-transition");
        $(".col-transition-1").addClass("top100");
        
    }, 1000);
    setTimeout(function() {
        $(".col-transition-2").removeClass("top-0");
        $(".col-transition-2").addClass("col-transition");
        $(".col-transition-2").addClass("top100");
    }, 1200);
    setTimeout(function() {
        $(".col-transition-3").removeClass("top-0");
        $(".col-transition-3").addClass("col-transition");
        $(".col-transition-3").addClass("top100");
    }, 1400);
    setTimeout(function() {
        $(".col-transition-4").removeClass("top-0");
        $(".col-transition-4").addClass("col-transition");
        $(".col-transition-4").addClass("top100");
    }, 1600);
    setTimeout(function() {
        $(".transition").addClass("z-100");
    }, 2500);
});
