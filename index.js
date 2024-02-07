"use strict"
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const fone = document.getElementById("fone")
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputUsername();
  checkInputEmail();
  checkInputFone();
  checkInputMessage();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if ( usernameValue === ""){ 
    errorInput(username, "*Campos Obrigatorios")
    }else{
      const vistoo = username.parentElement;
      vistoo.classList = "form-control success"
    }

}

function checkInputEmail(){
  const emailValue = email.value;

  if ( emailValue === ""){ 
    errorInput(email, "*Campos Obrigatorios")
    }else{
      const vistoo = email.parentElement;
      vistoo.classList = "form-control success"
    }

}

function checkInputFone(){
  const foneValue = fone.value;

  if ( foneValue === ""){ 
    errorInput(fone, "*Campos Obrigatorios")
    }else{
      const vistoo = fone.parentElement;
      vistoo.classList = "form-control success"
    }

}

function checkInputMessage(){
  const messageValue = message.value;

  if ( messageValue === ""){ 
    errorInput(message, "*Campos Obrigatorios")
    }else{
      const vistoo = message.parentElement;
      vistoo.classList = "form-control success"
    }

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("span")

  textMessage.innerText = message;

  formItem.className = "form-control error"
}

function successInput(input){
  const vistoo = input.parentElement;
  const visto = vistoo.querySelector("input")

  vistoo.className = "form-control success"
}