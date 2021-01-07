
// ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC1Idbp3E8IaUTNhuqnSAvVjhilr46z1gw",
      authDomain: "kwitter-5025e.firebaseapp.com",
      projectId: "kwitter-5025e",
      storageBucket: "kwitter-5025e.appspot.com",
      messagingSenderId: "743054211499",
      appId: "1:743054211499:web:e00e7d430455743f7bbaee"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      // Start code

      // End code
      });});}
getData();
