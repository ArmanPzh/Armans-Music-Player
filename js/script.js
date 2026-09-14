'use strict'
import {songs, playlists, artists} from "./getData.js"
import carousel from "./carousel.js";
import search from "./search.js"
// import artists from "./artists.js"
// import playlists from "./playlists.js"

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");


hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});



carousel();
search();