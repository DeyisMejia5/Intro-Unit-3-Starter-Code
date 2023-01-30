let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let yesButton = document.querySelector(".option-one-button");
let noButton = document.querySelector(".option-two-button"); 

yesButton.onclick = function(){
  optionOneScreen.style.display="block";
  storyOpening.style.disply="none";
}
noButton.onclick = function(){
  optionTwoScreen.style.display="block";
  storyOpening.style.display="none";
}