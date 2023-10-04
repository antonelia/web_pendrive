var webIndar = false;
var webVentanas = false;
var webSonrisanas = false;
var webPuzzle = false;

$('#web-indar').click(function () {
    webIndar = true;

    if(webIndar==true & webVentanas==true & webSonrisanas==true){

    }
});

$('#web-renueva-tus-ventanas').click(function () {
    webVentanas = true;
    if(webIndar==true & webVentanas==true & webSonrisanas==true){

    }
});

$('#web-sonrisanas').click(function () {
    webSonrisanas = true;
    if(webIndar==true & webVentanas==true & webSonrisanas==true){
 
    }
});



$(document).ready(function(){
    // Inicializar slick library
    $('.slider-webs').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Mostrar el modal con el puzzle cuando se clickea la imagen
$('#puzzle-image').click(function () {
    window.location.href="./rompecabezas.html";
});