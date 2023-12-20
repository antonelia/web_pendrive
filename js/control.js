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

fs.collection("config_options").doc("options").onSnapshot(function (querySnapshot) {
    var settingsObj = querySnapshot.data();

    // Consulto los datos en firebase y los guardo en variables
    var cierreActivado = settingsObj.verCierre;
    var puntoDeControlActivado = settingsObj.puntoDeControlActivado;

    if(cierreActivado == true){
        console.log("cierre activado");
        $("#offButton").addClass("boton-inactivo");
        $("#offButton").removeClass("boton-activo");
        $("#onButton").addClass("boton-activo");
        $("#onButton").removeClass("boton-inactivo");
    }
    else{
        console.log("cierre desactivado");
        $("#offButton").addClass("boton-activo");
        $("#offButton").removeClass("boton-inactivo");
        $("#onButton").addClass("boton-inactivo");
        $("#onButton").removeClass("boton-activo");
        
    }
    
    if(puntoDeControlActivado == true){
        console.log("punto de control activado");
        $("#offButtonPuntoDeControl").addClass("boton-inactivo");
        $("#offButtonPuntoDeControl").removeClass("boton-activo");
        $("#onButtonPuntoDeControl").addClass("boton-activo");
        $("#onButtonPuntoDeControl").removeClass("boton-inactivo");
    }
    else{
        console.log("cierre desactivado");
        $("#offButtonPuntoDeControl").addClass("boton-activo");
        $("#offButtonPuntoDeControl").removeClass("boton-inactivo");
        $("#onButtonPuntoDeControl").addClass("boton-inactivo");
        $("#onButtonPuntoDeControl").removeClass("boton-activo");
        
    }
    
});

$('#onButton').on('click', function(){
    configOptions.doc("options").update({
        verCierre: true
    });
});

$('#offButtonPuntoDeControl').on('click', function(){
    configOptions.doc("options").update({
        verCierre: false
    });
});

$('#onButtonPuntoDeControl').on('click', function(){
    configOptions.doc("options").update({
        puntoDeControlActivado: true
    });
    configOptions.doc("options").update({
        caraCeleste: true
    });
    configOptions.doc("options").update({
        caraRoja: true
    });
    configOptions.doc("options").update({
        caraAmarilla: true
    });
});

$('#offButtonPuntoDeControl').on('click', function(){
    configOptions.doc("options").update({
        puntoDeControlActivado: false
    });
    configOptions.doc("options").update({
        caraCeleste: false
    });
    configOptions.doc("options").update({
        caraRoja: false
    });
    configOptions.doc("options").update({
        caraAmarilla: false
    });
});
