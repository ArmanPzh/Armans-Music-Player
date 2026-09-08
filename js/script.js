'use strict'
import carousel from "./carousel.js";

carousel();

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");

hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});


// TODO: FIX THE BUG WHERE THE CAROUSEL IS NOT RESPONSIVE AND DOES NOT SCALE PROPERLY ON DIFFERENT SCREEN SIZES.
