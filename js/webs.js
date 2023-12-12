var webIndar = false;
var webVentanas = false;
var webSonrisanas = false;
var webPuzzle = false;

$(window).on('load', function(){
    $("#puzzle-image").hide();
    $('#loader').fadeOut();

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