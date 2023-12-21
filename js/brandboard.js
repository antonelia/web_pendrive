firebaseConfig = {
  apiKey: "AIzaSyB8vXllOuyYlUWejRflHZ1o2iae32AbbD0",
      authDomain: "rabanito-48959.firebaseapp.com",
      projectId: "rabanito-48959",
      storageBucket: "rabanito-48959.appspot.com",
      messagingSenderId: "308734318900",
      appId: "1:308734318900:web:045ba141a7c16c64802d61",
      measurementId: "G-X1MDLYQ7S9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();

var configOptions = fs.collection('config_options');
var options = fs.collection('config_options').doc("options");

// fs.collection("config_options").doc("options").onSnapshot(function (querySnapshot) {
//   var settingsObj = querySnapshot.data();
//   var cierreActivado = settingsObj.verCierre;
//   console.log(cierreActivado);

//   if(cierreActivado == true){
//       window.location.href="cierre.html"
//   }
// });

$("#qr-reel").hide();

$(document).ready(function() {
  $("#intro-modal").modal('show');

  setTimeout(function () {
    $("#intro-modal").fadeOut();
    $("#intro-modal").modal('hide');
  }, 3500);
});

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player', {
    title: 'Example Title',
    fullscreen: {
      enabled: false
    }
  });
  player.volume = 0.1;

  player.on('ended', function () {
    setTimeout(function () {
      window.location.href="punto-de-control.html"
    }, 1500);
  });
});

// Drag & Drop

(function dragndrop() {
  let xpos = '';
  let ypos = '';
  let whichArt = '';

  function resetZ() {
    const imgEl = document.querySelectorAll('img');
    for (let i = imgEl.length - 1; i >= 0; i--) {
      imgEl[i].style.zIndex = 5;
    }
  }

  function moveStart(e) {
    whichArt = e.target;
    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(e) {
    e.preventDefault();
  }


  function moveDrop(e) {
    e.preventDefault();
    whichArt.style.left = e.pageX - xpos + 'px';
    whichArt.style.top = e.pageY - ypos + 'px';

    // Contar cuántos elementos colisionan con #box
    const totalElements = $(".element").length;
    let collidedElements = 0;

    $(".element").each(function () {
      if (collision($(this), box)) {
        collidedElements++;
        // Ocultar el elemento que colisiona con la box
        $(this).css('opacity', 0);
      }
    });

    //$('#result').text(collidedElements);

    // Verificar si todos los elementos han colisionado
    if (collidedElements === totalElements) {
      // Cambiar la imagen
      document.querySelector("#box img").src = "assets/img/cube-01.svg";

      $("#box").addClass("d-none-zoom-out");
      
      setTimeout(function () {
          $("#drag-drop").fadeOut();
          $("#drag-drop").addClass("d-none");
      }, 1000);

      // Esperar 2 segundos antes de mostrar #brandboard
      setTimeout(function () {
        // Mostrar el elemento con ID brandboard y ocultar el elemento con ID drag-drop
        $("#brandboard").fadeIn();
        $("#brandboard").removeClass("d-none");
      }, 1000);

    }
  }



  function touchStart(e) {
    e.preventDefault();
    const whichArt = e.target;
    const touch = e.touches[0];
    let moveOffsetX = whichArt.offsetLeft - touch.pageX;
    let moveOffsetY = whichArt.offsetTop - touch.pageY;
    resetZ();
    whichArt.style.zIndex = 10;

    whichArt.addEventListener('touchmove', function () {
      let posX = touch.pageX + moveOffsetX;
      let posY = touch.pageY + moveOffsetY;
      whichArt.style.left = posX + 'px';
      whichArt.style.top = posY + 'px';
    }, false);
  }

  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);

  document.querySelector('body').addEventListener('touchstart', touchStart, false);

  // chequear si se chocan
  var box = $("#box");
  var div1 = $("#element1");

  function collision(div1, box) {
    var x1 = div1.offset().left;
    var y1 = div1.offset().top;
    var h1 = div1.outerHeight(true);
    var w1 = div1.outerWidth(true);

    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = box.offset().left;
    var y2 = box.offset().top;
    var h2 = box.outerHeight(true);
    var w2 = box.outerWidth(true);

    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  // hacer algo
  window.setInterval(function () {
    $('#result').text(collision(div1, box));
  }, 200);

})();