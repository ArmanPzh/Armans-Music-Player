'use strict'
import {songs, playlists, artists} from "./getData.js"
import carousel from "./carousel.js";
import search from "./search.js"

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");

carousel();
search();

hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});