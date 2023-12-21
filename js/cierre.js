//Intro
$(window).on('load', function(){
  $("html").css("overflow", "hidden");
  $('#loader').fadeOut();
});
$(".gift").on("click", function(){
  $("#intro").fadeOut();
  $("#section1").removeClass("d-none");
})


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

// ...

// quiz logic...
// quiz logic...
function generateImage() {
  const img = document.querySelector(".reveal-box__image");

  // Show the spinner while the image is loading
  $("#spinner").removeClass("d-none");

  // Load event to handle image loading completion
  img.addEventListener("load", function () {
    // Hide the spinner once the image is loaded
    $("#spinner").addClass("d-none");

    // Remove the 'd-none' class to make the image visible
    $("#img").removeClass("d-none");

    // Add the reveal animation to the image only when the URL is loaded
    img.classList.add('reveal-box__image-animation');

    // Remove the event listener to prevent multiple calls
    img.removeEventListener("load", arguments.callee);
  });

  // Fetch image data and set the image source
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
      Authorization: "KEY ACA",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Set the image source
      img.src = data.data[0].url;
    })
    .catch((error) => {
      console.error("Error generating image:", error);

      // Hide the spinner in case of an error
      $("#spinner").addClass("d-none");
    });
}

// ...

// Eventos clic para las opciones "day" y "night"
document.querySelector("#dia").addEventListener("click", function () {
  nextStep4("day");
});

document.querySelector("#noche").addEventListener("click", function () {
  nextStep4("night");
});

//img
document.addEventListener('DOMContentLoaded', function () {
  let revealBox = document.querySelector('.reveal-box');

  // Add a 2-second delay before triggering the initial animation
  setTimeout(function () {
    // Add the 'enter' class to trigger the initial animation
    revealBox.classList.add('enter');
  }, 2000);

  // Add an event listener for the animation end event
  revealBox.addEventListener('animationend', function () {
    // Remove the 'enter' class to prevent further animations
    revealBox.classList.remove('leave');
  });
});



