import { artists } from "./getData.js";

const artistsContainerEl = document.querySelector(".artists-container");

artistsContainerEl.innerHTML = artists.filter((artist) => artist.image && artist.website)
    .map((artist) => {
        return `
            <div class="artist-card">
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <a target="_blank" href="${artist.website}"><button>Website</button></a>
            </div>
        `;
    }).join("");
