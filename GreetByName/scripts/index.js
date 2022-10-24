"use strict";
window.onload = init;

function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetUserBtnClicked; 


const nameField = document.getElementById("nameField");
nameField.innerHTML = message 
 
}
function onGreetUserBtnClicked() {
 alert ("Hello" + document.getElementById("nameField"));
 
}
