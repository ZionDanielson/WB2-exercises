"use strict";

console.log("the index.js has begun executing...");


const greeting = document.getElementById("greeting");
const nameTextbox = document.getElementById("nameTextbox");
const pressMeButton = document.getElementById("greetTheUserBtn")


function init(){
    console.log ("hello from inside the init function!")
    
    onGreetUserBtnClicked.onclick = onGreetUserBtnClicked;

    window.onload = init;

    function onGreetUserBtnClicked(){

        console.log("hello from inside the onGreetUserBtnClicked() function!")
        
        let username = nameTextbox.value;

        greeting.innerHTML = `Hello to ${username} from inside the onGreetUserBtnClicked`

    }
}


console.log("the index.js has finished executing...");