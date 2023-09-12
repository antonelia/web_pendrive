var juegoReciclar = false;
var juegoDia = false;
var juegoWallet = false;
var noAbrir = false;

$(document).ready(function(){
    $('#no-abrir').hide();
});

$('#juego-dia').click(function () {
    juegoReciclar = true;
    console.log(juegoDia, juegoReciclar, juegoWallet);
    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').fadeOut();
        setTimeout(function() {
            $('#no-abrir').fadeIn();
        }, 2000);
    }

    window.open(
        '/Juego-Dia', '_blank'
    );
});

$('#juego-reciclar').click(function () {
    juegoDia = true;
    console.log(juegoDia, juegoReciclar, juegoWallet);
    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').fadeOut();
        setTimeout(function() {
            $('#no-abrir').fadeIn();
        }, 2000);
    }

    window.open(
        '/BA-Recicla', '_blank'
    );
});

$('#juego-wallet').click(function () {
    juegoWallet = true;
    console.log(juegoDia, juegoReciclar, juegoWallet);
    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').fadeOut();
        setTimeout(function() {
            $('#no-abrir').fadeIn();
        }, 2000);
    }
});

$('#no-abrir').click(function () {
    window.location.href='no-abrir.html'
});
