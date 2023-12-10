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
      Authorization: "copiaraca",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      img.src = data.data[0].url;
    })
    .catch((error) => {
      console.error("Error generating image:", error);
    });
}

// Eventos clic para las opciones "day" y "night"
document.querySelector("#dia").addEventListener("click", function () {
  nextStep4("day");
});

document.querySelector("#noche").addEventListener("click", function () {
  nextStep4("night");
});
