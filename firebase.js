// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBQNnui0TIukkgLhnxY6Ww1TpOhDxemIYk",
    authDomain: "personal-website-16f71.firebaseapp.com",
    databaseURL: "https://personal-website-16f71-default-rtdb.firebaseio.com",
    projectId: "personal-website-16f71",
    storageBucket: "personal-website-16f71.appspot.com",
    messagingSenderId: "210264678047",
    appId: "1:210264678047:web:4b90bb702a337cd14b0caa",
    measurementId: "G-MNBHGXTJXN"
  };

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.message-sent-alert').style.opacity = 1;
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.message-sent-alert').style.opacity = 0;
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }