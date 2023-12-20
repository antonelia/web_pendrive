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

window.onload = function(){
    $(".mensaje-avanzar").hide();
}
  
fs.collection("config_options").doc("options").onSnapshot(function (querySnapshot) {
  var settingsObj = querySnapshot.data();
  var caraAmarilla = settingsObj.caraAmarilla;
  var caraRoja = settingsObj.caraRoja;
  var caraCeleste = settingsObj.caraCeleste;
  var puntoDeControlActivado = settingsObj.puntoDeControlActivado;

//   console.log(cierreActivado);
  
    if(caraCeleste == true){
        $(".cara-celeste").addClass("opacity-1");
    }else{
        $(".cara-celeste").removeClass("opacity-1");
    }

    if(caraRoja == true){
        $(".cara-roja").addClass("opacity-1");
    }else{
        $(".cara-roja").removeClass("opacity-1");
    }

    if(caraAmarilla == true){
        $(".cara-amarilla").addClass("opacity-1");
    }else{
        $(".cara-amarilla").removeClass("opacity-1");
    }

    if(caraAmarilla == true && caraCeleste == true && caraRoja == true){
        configOptions.doc("options").update({
            puntoDeControlActivado: true
        });
    }else{
        configOptions.doc("options").update({
            puntoDeControlActivado: false
        });
    }

    if(puntoDeControlActivado == true){
        $(".mensaje-avanzar").removeClass("d-none");
        $(".mensaje-avanzar").fadeIn();
        setTimeout(function () {
            window.location.href="ver-reel.html"
          }, 2000);
    }else{
        $(".mensaje-avanzar").addClass("d-none");
    }
    
    
});

$(".cara-celeste").on("click", function(){
    configOptions.doc("options").update({
        caraCeleste: true
    });
    $(".cara-celeste").addClass("opacity-1");
    $(".cara-roja").addClass("pointers-none");
    $(".cara-amarilla").addClass("pointers-none");
});

$(".cara-roja").on("click", function(){
    configOptions.doc("options").update({
        caraRoja: true
    });
    $(".cara-roja").addClass("opacity-1");
    $(".cara-celeste").addClass("pointers-none");
    $(".cara-amarilla").addClass("pointers-none");
});

$(".cara-amarilla").on("click", function(){
    configOptions.doc("options").update({
        caraAmarilla: true
    });
    $(".cara-amarilla").addClass("opacity-1");
    $(".cara-roja").addClass("pointers-none");
    $(".cara-celeste").addClass("pointers-none");
});