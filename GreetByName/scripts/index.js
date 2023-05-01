"use strict";

console.log("the index.js has begun executing...");

// Variables

const greeting = document.getElementById("greeting");
const nameTextbox = document.getElementById("nameTextbox");
const greetTheUserBtn = document.getElementById("greetTheUserBtn")


//Functions

function init() {
    console.log("hello from inside the init function!")

    greetTheUserBtn.onclick = onGreetUserBtnClicked; //Button is clicked

}

window.onload = init; // Initiataion Command!

function onGreetUserBtnClicked() {

    console.log("hello from inside the onGreetUserBtnClicked() function!")

    let username = nameTextbox.value;

    // alert(username); // Optional

    greeting.innerHTML = `Hello to ${username}` // Pop up greeting after username is entered

}

console.log("the index.js has finished executing...");