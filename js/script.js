'use strict'
import {songs, playlists, artists} from "./getData.js"
import carousel from "./carousel.js";
// import musicPlayer from "./musicPlayer.js";
import search from "./search.js"

const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");


carousel();
search();
// musicPlayer();


hamburger.addEventListener("click", () => {
    navUlEl.classList.toggle("show-menu");
});



