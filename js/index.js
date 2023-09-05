var juegoReciclar = false;
var juegoDia = false;
var juegoWallet = false;
var noAbrir = false;

$(document).ready(function(){
    $('#no-abrir').hide();
});

$('#juego-dia').click(function () {
    juegoReciclar = true;

    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').hide();
        $('#no-abrir').fadeIn();
    }
});

$('#juego-reciclar').click(function () {
    juegoDia = true;
    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').hide();
        $('#no-abrir').fadeIn();
    }
});

$('#juego-wallet').click(function () {
    juegoWallet = true;
    if(juegoReciclar==true & juegoDia==true & juegoWallet==true){
        $('#fila-juegos').hide();
        $('#no-abrir').fadeIn();
    }
});
