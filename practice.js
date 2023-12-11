var firebaseConfig = {
  apiKey: "AIzaSyAY3aVTbzsCFYYzlK2RGvxc-rUg-zh2u4Q",
  authDomain: "kwitter-5bef8.firebaseapp.com",
  projectId: "kwitter-5bef8",
  storageBucket: "kwitter-5bef8.appspot.com",
  messagingSenderId: "746156506600",
  appId: "1:746156506600:web:e4229d548e48c34985b85d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser() { user_name = document.getElementById("user_name").value; 
firebase.database().ref("/").child(user_name).update({ 
    purpose : "adding user" 
}); 
}


