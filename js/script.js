'use strict'
import {carousel} from "./carousel.js";

carousel();

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");

hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});


// TODO: FIX THE BUG WHERE THE WHOLE PAGE IS JUST THE CAROUSEL AND THE NAVBAR, AND THE REST OF THE PAGE IS NOT VISIBLE.