//YOUR FIREBASE LINKS\
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
    
  firebase.initializeApp(firebaseConfig)
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";

  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){

      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
    }