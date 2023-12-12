var webIndar = false;
var webVentanas = false;
var webSonrisanas = false;
var webPuzzle = false;

$(window).on('load', function(){
    $(".lamparita").hide();
    $(".scroll-animations-example").hide();

    $("#puzzle-image").hide();
    $('#loader').fadeOut();
    
    setTimeout(function() {
        $('#intro-text').fadeOut();
    }, 7000);
    setTimeout(function() {
        $('.lamparita').fadeIn();
    }, 7200);

});

$('#web-indar').click(function () {
    $("#modal-indar").modal('toggle');
    webIndar = true;
    if(webIndar==true & webVentanas==true & webSonrisanas==true){
        $("#mensaje").hide();
        $("#puzzle-image").fadeIn();
    }
});

$('#web-ventanas').click(function () {
    $("#modal-ventanas").modal('toggle');
    webVentanas = true;
    if(webIndar==true & webVentanas==true & webSonrisanas==true){
        $("#mensaje").hide();
        $("#puzzle-image").fadeIn();
    }
});

$('#web-sonrisanas').click(function () {
    $("#modal-sonrisanas").modal('toggle');
    webSonrisanas = true;
    if(webIndar==true & webVentanas==true & webSonrisanas==true){
        $("#mensaje").hide();
        $("#puzzle-image").fadeIn();
    }
});

class Example {
    constructor(options) {
        this.root = options.root;

        this.init();

        setTimeout(this.showImages.bind(this), 1000);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.root,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
        });

        this.images = this.root.querySelectorAll('.image');

        [].forEach.call(this.images, (image) => {
            image.addEventListener('click', () => {
                image.classList.add('-clicked');
                this.hideImages();
            });
        });
    }

    showImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-clicked');
            image.classList.add('-active');
        });
    }

    hideImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-active');
        });

        setTimeout(this.showImages.bind(this), 2000);
    }
}

$("#close-indar").click(function () {
    $("#modal-indar").modal('toggle');
});

$("#close-sonrisanas").click(function () {
    $("#modal-sonrisanas").modal('toggle');
});

$("#close-ventanas").click(function () {
    $("#modal-ventanas").modal('toggle');
});

window.addEventListener('DOMContentLoaded', (event) => {
    const example = new Example({
        root: document.querySelector('.scroll-animations-example')
    });
});


// Mostrar el modal con el puzzle cuando se clickea la imagen
$('#puzzle-image').click(function () {
    window.location.href="./rompecabezas.html";
});

//Lamparita
const {
    gsap: { registerPlugin, set, to, timeline },
    MorphSVGPlugin,
    Draggable } =
  window;
  registerPlugin(MorphSVGPlugin);
  
  // Used to calculate distance of "tug"
  let startX;
  let startY;
  
  const AUDIO = {
    CLICK: new Audio('https://assets.codepen.io/605876/click.mp3') };
  
  const STATE = {
    ON: false };
  
  const CORD_DURATION = 0.1;
  
  const CORDS = document.querySelectorAll('.toggle-scene__cord');
  const HIT = document.querySelector('.toggle-scene__hit-spot');
  const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
  const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
  const PROXY = document.createElement('div');
  // set init position
  const ENDX = DUMMY_CORD.getAttribute('x2');
  const ENDY = DUMMY_CORD.getAttribute('y2');
  const RESET = () => {
    set(PROXY, {
      x: ENDX,
      y: ENDY });
  
  };
  
  RESET();
  
  const CORD_TL = timeline({
    paused: true,
    onStart: () => {
      STATE.ON = !STATE.ON;
      set(document.documentElement, { '--on': STATE.ON ? 1 : 0 });
      set([DUMMY, HIT], { display: 'none' });
      set(CORDS[0], { display: 'block' });
      AUDIO.CLICK.play();
    },
    onComplete: () => {
      set([DUMMY, HIT], { display: 'block' });
      set(CORDS[0], { display: 'none' });
      RESET();
    } });
  
  
  for (let i = 1; i < CORDS.length; i++) {
    CORD_TL.add(
    to(CORDS[0], {
      morphSVG: CORDS[i],
      duration: CORD_DURATION,
      repeat: 1,
      yoyo: true }));
  
  
  }
  
  Draggable.create(PROXY, {
    trigger: HIT,
    type: 'x,y',
    onPress: e => {
      startX = e.x;
      startY = e.y;
    },
    onDrag: function () {
      set(DUMMY_CORD, {
        attr: {
          x2: this.x,
          y2: this.y } });
  
  
    },
    onRelease: function (e) {
      const DISTX = Math.abs(e.x - startX);
      const DISTY = Math.abs(e.y - startY);
      const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
      to(DUMMY_CORD, {
        attr: { x2: ENDX, y2: ENDY },
        duration: CORD_DURATION,
        onComplete: () => {
          if (TRAVELLED > 50) {
            CORD_TL.restart();
            console.log("entro al if");

            setTimeout(function() {
                $("#slide-1").addClass("slideinright");
            }, 500);
            setTimeout(function() {
                $("#slide-2").addClass("slideinright");
            }, 1000);
            setTimeout(function() {
                $("#slide-3").addClass("slideinright");
            }, 1500);
            setTimeout(function() {
                $("#slide-4").addClass("slideinright");
                $('#intro').hide();
                $(".scroll-animations-example").show();
            }, 2000);

            // setTimeout(function() {
            //     $(".scroll-animations-example").show();
            //     $('#intro').fadeOut();
            // }, 2000);

          } else {
            RESET();
            console.log("entro al else");
          }
        } });
  
    } });