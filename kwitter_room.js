
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
  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id =" +Room_names+" onclick='redirectToRoom(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();




function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
