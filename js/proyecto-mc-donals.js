// Script password
var password = 'hola mundo';
var input = $('#password-input');

$(document).ready(function(){
    $('#mcdonalds-container').hide();
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