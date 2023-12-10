const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const input = document.querySelector("#input");

const OPENAI_API_KEY = "OPENAI_API_KEY";

btn.addEventListener("click", async () => {
  if (input.value === "") {
    alert("Please enter a prompt!");
    return;
  }

  btn.disabled = true;

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: input.value,
      n: 1,
      size: "1024x1024",
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
  });
  const data = await res.json();
  console.log(data);

  input.value = "";

  img.src = data.data[0].url;
  btn.disabled = false;
  // img.src = "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld"
});

//quiz


function nextStep2(){
  $("#pregunta1").addClass("d-none");
  $("#pregunta2").removeClass("d-none");
}

function nextStep3(){
  $("#pregunta2").addClass("d-none");
  $("#pregunta3").removeClass("d-none");
}

function nextStep4(){
  $("#pregunta3").addClass("d-none");
  $("#section2").removeClass("d-none");
}