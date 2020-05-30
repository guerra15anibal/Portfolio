// Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDnnCWMq-hCooHCi73wtFg11CloMlyIc_g",
  authDomain: "portfolio-2633a.firebaseapp.com",
  databaseURL: "https://portfolio-2633a.firebaseio.com",
  projectId: "portfolio-2633a",
  storageBucket: "portfolio-2633a.appspot.com",
  messagingSenderId: "594226420866",
  appId: "1:594226420866:web:8ab1e4ca4e9ed062a1a89b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messageData = firebase.database();

//Ref messages
var messageRef = firebase.database().ref("messages");

// Listen For Submit
$(document).on("click", "#submit", function () {
  event.preventDefault();
  var email = $("#email").val();
  var name = $("#name").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  saveMessage(email, name, subject, message);
  if (email,name,subject,message == ""){
    alert("Must fill form completely!!")
  }else{
  $("#form").remove();
  var div = `<div class = 'newForm' >Thank you, I will contact you ASAP!</div>`
  $("#newForm").append(div);
  }
});

function saveMessage(email, name, subject, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    email: email,
    name: name,
    subject: subject,
    message: message,
  });
}