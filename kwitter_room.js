
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
  

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name, room_name");
      window.location = "Kwitter_page.html";
}     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location.replace("Kwitter_page.html");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html");
      }
      