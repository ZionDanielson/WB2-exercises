"use strict";

console.log("the index.js has begun executing...");


const greeting = document.getElementById("greeting");
const nameTextbox = document.getElementById("nameTextbox");
const greetTheUserBtn = document.getElementById("greetTheUserBtn")


function init(){
    console.log ("hello from inside the init function!")
    
    greetTheUserBtn.onclick = onGreetUserBtnClicked;

}

window.onload = init;

function onGreetUserBtnClicked(){

    console.log("hello from inside the onGreetUserBtnClicked() function!")
    
  let username = nameTextbox.value;
// alert(username);
    greeting.innerHTML = `Hello to ${username} from inside the onGreetUserBtnClicked`

}

console.log("the index.js has finished executing...");