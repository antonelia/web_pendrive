/*//Esta primer funcion bloquea el scroll del sitio apenas carga para esperar que el usuario responda el mensaje de cookies
$( document ).ready(function() {

  let darkModeEnabled;

  $('#darkModeToggle').change(function() {
    darkModeEnabled = $(this).is(':checked'); // Actualizar la variable cada vez que cambie el estado del checkbox
    console.log('Dark mode: ' + darkModeEnabled); // Puedes mostrar el valor en la consola o hacer algo más con él
    if( darkModeEnabled){
      $("body").addClass("dark-mode");
    }else{
      $("body").removeClass("dark-mode");
      console.log("quitar clase")
    }
  });
});*/

var msg = "";
function generateAnimalEmojis() {
  msg = "gatitos";
  const emojis = ['🐱', '🐱', '🐱', '🐱'];
  generateEmojiRain(emojis);
}

function generateCookiesEmojis() {
  msg = "cookies";
  const emojis = ["🍪", "🍪", "🍪", "🍪"];
  generateEmojiRain(emojis);

}
$( document ).ready(function() {
  
});

$(window).on('load', function(){
  setTimeout(function() {
      $('#loader').fadeOut();
  }, 2000);

  /*setTimeout(function() {
    $('#cookies-section').modal('show');
  }, 4000);*/
  
});



function generateEmojiRain(emojis) {
  // Código que genera la lluvia de emojis
  $("#cookies-section").modal('toggle');
  const emojiRainContainer = document.createElement("div");
  document.body.appendChild(emojiRainContainer);
  let count = 0;
  const intervalId = setInterval(() => {
    if (count >= 60) {
      clearInterval(intervalId);
      emojiRainContainer.innerHTML = "";
      if( msg == 'gatitos'){
        console.log("gatitos");
      }else{
        console.log("cookies");
      }

    } else {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      const emojiSpan = document.createElement("span");
      emojiSpan.innerText = randomEmoji;
      emojiSpan.style.fontSize = "30px";
      emojiSpan.style.position = "absolute";
      emojiSpan.style.left = Math.random() * window.innerWidth + "px";
      emojiSpan.style.top = -Math.random() * window.innerHeight + "px";
      emojiSpan.style.animation = "emoji-fall 2s linear";
      emojiRainContainer.appendChild(emojiSpan);
      count++;
    }
  }, 50);

  //Esta linea devuelve la posibilidad de scrollear el sitio luego de que se ejecutaron las funciones de la lluvia de emojis y se mostraron los modales con los mensajes
  document.body.style.overflow = "auto";

}

/*function pageRedirect() {
  window.location.href = 'nosotras.html';
}

function avanzarPaginaNosotrasCookies(){
  $('#cookies-modal').modal('toggle');
  pageRedirect();
}
function avanzarPaginaNosotrasGatitos(){
  $('#gatitos-modal').modal('toggle');
  pageRedirect();
}*/

const animalsButton = document.getElementById('no-accept-cookies');
animalsButton.addEventListener('click', generateAnimalEmojis);

const fruitsButton = document.getElementById('accept-cookies');
fruitsButton.addEventListener('click', generateCookiesEmojis);
