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
  }

