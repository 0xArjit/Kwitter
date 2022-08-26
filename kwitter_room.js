
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyA0v0QCgSRvaAugaASTcUDkHLchLrI3H_w",
    
      authDomain: "kwitter-c0e66.firebaseapp.com",
    
      databaseURL: "https://kwitter-c0e66-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-c0e66",
    
      storageBucket: "kwitter-c0e66.appspot.com",
    
      messagingSenderId: "530342808100",
    
      appId: "1:530342808100:web:1978708d24731e9ad8e6b1"
    
    };
    
    
    // Initialize Firebase
    
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
