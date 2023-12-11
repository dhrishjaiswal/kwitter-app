const firebaseConfig = {
    apiKey: "AIzaSyBrn-YqXhEoF26_RobhfPMfn91CNZ04deE",
    authDomain: "kwitter-app-cbf5c.firebaseapp.com",
    databaseURL: "https://kwitter-app-cbf5c-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cbf5c",
    storageBucket: "kwitter-app-cbf5c.appspot.com",
    messagingSenderId: "270243379064",
    appId: "1:270243379064:web:541b3d47b9c9e4a37bfa8d"
  };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function addUser(){

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}