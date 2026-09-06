'use strict'

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");

hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});


