// Script password
var password = 'pass';
var input = $('#password-input');

$(document).ready(function(){
    $('#mcdonalds-container').hide();
});

$('#password-button').click(function(){
    if(input.val()==password){
    $('#password-container').addClass('d-none');
    $('#mcdonalds-container').fadeIn(1500);
    $('#siguiente').removeClass('d-none');
    }else if(input.val()==""){
        alert('Ingresa una contraseña');
    }else{
        alert('Contraseña incorrecta');
    }
});