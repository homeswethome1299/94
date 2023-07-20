
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDrW9c0bjkuicjNPWGyou5nMMR5jm7kNdM",
    authDomain: "kwitter1-b3621.firebaseapp.com",
    databaseURL: "https://kwitter1-b3621-default-rtdb.firebaseio.com",
    projectId: "kwitter1-b3621",
    storageBucket: "kwitter1-b3621.appspot.com",
    messagingSenderId: "929579673060",
    appId: "1:929579673060:web:308cd8930e60bc197b13f1"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    //End code
    });});}
getData();