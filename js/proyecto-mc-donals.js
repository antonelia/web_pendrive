// Script password
var password = 'hola mundo';
var input = $('#password-input');

$(document).ready(function(){
    $('#mcdonalds-container').hide();
    $('#siguiente').hide();
});

$('#password-button').click(function(){
    if(input.val().toLowerCase()==password){
    $('#password-container').addClass('d-none');
    $('#mcdonalds-container').fadeIn(1500);
    $('#siguiente').removeClass('d-none');
    }else if(input.val()==""){
        alert('Ingresa una contraseña');
    }else{
        alert('Contraseña incorrecta');
    }
});

$('#password-input').keyup(function(e) {

    if (event.key === "Enter"){
        if(input.val().toLowerCase()==password){
            $('#password-container').addClass('d-none');
            $('#mcdonalds-container').fadeIn(1500);
            $('#siguiente').removeClass('d-none');
        }else if(input.val()==""){
                alert('Ingresa una contraseña');
        }else{
                alert('Contraseña incorrecta');
        }
    }

});

$("#password-input").on( "focus", function() {
    $( ".input-group").css("box-shadow", "0 0 0 0.2rem var(--purple-color)");
});

$("#password-input").focusout(function(){
    $( ".input-group").css("box-shadow", "0 0 0 0");
});

document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        title: 'Example Title',
        fullscreen:{ enabled: true}
    }); 
   
    player.on('ended', function(){
        setTimeout(function() {
            $('#siguiente').fadeIn();
        }, 1500);    
    });
});