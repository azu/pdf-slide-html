// LICENSE : MIT
"use strict";
document.getElementById("main-slide").focus();
var fullScreenButton = document.getElementById("js-fullscreen-button");
fullScreenButton.addEventListener("click", function () {
    var content = document.querySelector(".main-content");
    content.classList.toggle("slide-state-fullscreen");
});