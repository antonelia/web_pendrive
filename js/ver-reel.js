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
  var cierreActivado = settingsObj.verCierre;
  console.log(cierreActivado);

  if(cierreActivado == true){
      window.location.href="cierre.html"
  }
});
$(window).on('load', function(){

  $('#loader').fadeOut();
  
});