'use strict'
import songs from "./getData.js"
export default async function carousel() {
    const randomSongs = [...songs]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
    const carouselContainer = document.querySelector('.carousel-container')

    const carousel = document.createElement("div")
    carousel.classList.add("carousel");
    carousel.innerHTML = randomSongs.map(song => `
    <div class="item" style="background-image: url('${song.image}');">
        <div class="content">
            <div class="name">${song.name}</div>
            <div class="artist">by ${song.artist_name}</div>
            <button>Play Now</button>
        </div>
    </div>
`).join("");

    carouselContainer.replaceChildren(carousel);

    const buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML = `
    <button class="prev"><i class="bx bx-left-arrow-alt"></i></button>
    <button class="next"><i class="bx bx-right-arrow-alt"></i></button>
`;
    carouselContainer.append(buttons);

    const carouselNextBtn = document.querySelector('.next')
    const carouselPrevBtn = document.querySelector('.prev')

    carouselNextBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.carousel').appendChild(items[0])
    })

    carouselPrevBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.carousel').prepend(items[items.length - 1])
    })
}