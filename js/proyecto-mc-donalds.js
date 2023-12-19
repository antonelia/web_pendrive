//Script password
var password = 'hola mundo';
var input = $('#password-input');

$(document).ready(function(){
    $('#mcdonalds-container').hide();
    $('#siguiente').hide();
});

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player', {
      title: 'Example Title',
      fullscreen:{ enabled: false}
  }); 
 
  player.on('ended', function(){
      setTimeout(function() {
          $('#siguiente').fadeIn();
      }, 1500);    
  });
});

// Creo variables para guardar el valor numerico que luego se usa para calcular cuanto mover el boton
var moverX = 0;
var moverY = 0; 


function moverBotonVideo() {
// Obtener el ancho de la pantalla
const anchoPantalla = window.innerWidth;

// Verificar el ancho y asignar un valor para que segun el tamaño el boton se mueva mas o menos
if (anchoPantalla <= 1366) {
  moverX = 30;
  moverY = 50; 
} else {
  moverX = 50;
  moverY = 90; 
}
}

// Llamar a la función cuando se carga la página o se redimensiona la ventana
window.addEventListener('load', moverBotonVideo);
window.addEventListener('resize', moverBotonVideo);

const button = document.getElementById('ver-manifiesto');
console.log("buton =" + button);
let moves = 0; // número de movimientos realizados

console.log("moves =" + moves);

button.addEventListener('mouseover', function () {
if (moves < 3) { // si se han realizado menos de 3 movimientos
  //para cambiar la distancia que se desplaza el boton ajustar el valor despues de *
  button.style.left = `${Math.ceil(Math.random() * moverX)}%`;
  button.style.top = `${Math.ceil(Math.random() * moverY)}%`;
  moves++; // aumenta el número de movimientos realizados
  $('#ver-manifiesto').click(function(){
    window.location.href="webs.html"
  });
}
});

$('#password-button').click(function(){
    if(input.val().toLowerCase()==password){
    $('#password-container').addClass('d-none');
    $('#mcdonalds-container').fadeIn(1500);
    $('#siguiente').removeClass('d-none');
    }else if(input.val()==""){
        alert('Ingresa una contraseña');
    }else{
        setTimeout(function() {
			$("#password-input").removeClass("shake");
		}, 1500); 
    }
});

$('#password-input').keyup(function(e) {

    if (event.key === "Enter"){
        if(input.val().toLowerCase()==password){
            $('#password-container').addClass('d-none');
			$("body").addClass('white');
            $('#mcdonalds-container').fadeIn(1500);
            $('#siguiente').removeClass('d-none');
        }else if(input.val()==""){
                alert('Ingresa una contraseña');
        }else{
                $("#password-input").addClass("shake");
				setTimeout(function() {
					$("#password-input").removeClass("shake");
				}, 1500); 
        }
    }

});

$("#password-input").on( "focus", function() {
    $( ".input-group").css("box-shadow", "0 0 0 0.2rem var(--purple-color)");
});

$("#password-input").focusout(function(){
   $( ".input-group").css("box-shadow", "0 0 0 0");
});