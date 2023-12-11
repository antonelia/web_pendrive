//Intro
$(window).on('load', function(){
  $("html").css("overflow", "hidden");
  $('#loader').fadeOut();
  setTimeout(function() {
      $('.linea-1').removeClass("inicio-animacion");
       $('.linea-1').addClass("empezar-animacion");
   }, 600);

   setTimeout(function() {
      $('.linea-1').fadeOut();
   }, 5000);

   setTimeout(function() {
      $('.linea-2').removeClass("inicio-animacion");
      $('.linea-2').addClass("empezar-animacion");
  }, 5000);

  setTimeout(function() {
      $('.linea-2').fadeOut();
   }, 10000);

  setTimeout(function() {
      $('.linea-3').removeClass("inicio-animacion");
      $('.linea-3').addClass("empezar-animacion");
  }, 10000);

  setTimeout(function() {
    $('.linea-3').fadeOut();
 }, 15000);

  setTimeout(function() {
    $('.linea-4').removeClass("inicio-animacion");
    $('.linea-4').addClass("empezar-animacion");
  }, 15000);

  //Despues de la intro empiezan a pasar estas cosas para que empiece la seccion
  setTimeout(function() {
    $("#intro").fadeOut();
    $("html").css("overflow", "auto");
    $("#section1").removeClass("d-none");
  }, 20000);
});


//quiz
let promptText = "An abstract 3D memphis like world that looks made with Blender, it's selectedTime, I'm surrounded by what I think are buildings. The predominant color I see is selectedColor. There are a lot of geometric shapes in 3D floating around, mostly selectedShape and very few spheres, cylinders, cubes and square pyramids. The rest of the colors in this city are dark purple (744593), bluish-green (3E3E63), mint green (6DC2C4), light yellow (E9DF67) and magenta pink (E43C5A)";

function nextStep2(selectedColor) {
  // Añadir el color seleccionado al prompt
  promptText = promptText.replace("selectedColor", selectedColor);

  $("#pregunta1").addClass("d-none");
  $("#pregunta2").removeClass("d-none");
}

function nextStep3(selectedShape) {
  // Añadir la forma seleccionada al prompt
  promptText = promptText.replace("selectedShape", selectedShape);

  $("#pregunta2").addClass("d-none");
  $("#pregunta3").removeClass("d-none");
}

function nextStep4(selectedTimeOfDay) {
  // Añadir la hora del día seleccionada al prompt
  promptText = promptText.replace("selectedTime", selectedTimeOfDay);

  $("#pregunta3").addClass("d-none");
  $("#section2").removeClass("d-none");

  // Mostrar el spinner mientras se carga la imagen
  $("#spinner").removeClass("d-none");

  // Llamar a la función de generación de imágenes
  generateImage();
}

function generateImage() {
  // Lógica para generar la imagen
  const img = document.querySelector("#img");

  fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: promptText,
      n: 1,
      size: "1024x1024",
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "apikey",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Ocultar el spinner una vez que la imagen se ha cargado
      $("#spinner").addClass("d-none");

      img.src = data.data[0].url;
    })
    .catch((error) => {
      console.error("Error generating image:", error);

      // En caso de error, también ocultar el spinner
      $("#spinner").addClass("d-none");
    });
}

// Eventos clic para las opciones "day" y "night"
document.querySelector("#dia").addEventListener("click", function () {
  nextStep4("day");
});

document.querySelector("#noche").addEventListener("click", function () {
  nextStep4("night");
});
