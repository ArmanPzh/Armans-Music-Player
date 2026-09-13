import musicPlayer from "./musicPlayer.js";
import downloadSong from "./downloadSong.js"

const searchFormEl = document.querySelector("#search-container");
const searchResultContainerEl = document.querySelector(".search-result-container");
const searchEl = document.querySelector("#search");

export default function search() {
  let currentResults = [];

  searchResultContainerEl.addEventListener("click", (e) => {
    const el = e.target.closest(".search-result-element");
    if (!el) return;
    const song = currentResults.find((s) => s.id === el.dataset.id);

    if (e.target.closest(".play-btn")) musicPlayer(song);
    if (e.target.closest(".download-btn")) downloadSong(song);
  });

  searchFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const keyword = searchEl.value;
      const response = await fetch(
        `https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all&search=${encodeURIComponent(keyword)}`,
      );
      const searchObjects = await response.json();
      const searchResult = searchObjects.results;
      if (searchObjects.headers.results_count == 0) {
        alert("no matching results");
        return;
      }
      currentResults = searchResult;
      searchResultContainerEl.innerHTML = searchResult
        .map((item) => `
        <div class="search-result-element" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.artist_name}</p>
            <button class="play-btn">play</button>
            <button class="download-btn"><i class='bx bxs-download'></i></button>
        </div>`
        )
        .join("");
      searchEl.value = "";
    } catch (error) {
      console.log(error);
    }
  });
}