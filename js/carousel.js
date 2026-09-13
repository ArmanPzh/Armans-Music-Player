import { songs } from "./getData.js";
import musicPlayer from "./musicPlayer.js";
import downloadSong from "./downloadSong.js"

const carouselContainer = document.querySelector(".carousel-container");

export default async function carousel() {
  const randomSongs = [...songs].sort(() => Math.random() - 0.5).slice(0, 6);

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  carousel.innerHTML = randomSongs
    .map(
      (song) => `
    <div class="item" data-id="${song.id}" style="background-image: url('${song.image}');">
        <div class="content">
            <div class="name">${song.name}</div>
            <div class="artist">by ${song.artist_name}</div>
            <button class="button play-btn">Play Now</button>
            <button class="button download-btn"><i class='bx bxs-download'></i></button>
        </div>
    </div>
`,
    )
    .join("");

  carouselContainer.replaceChildren(carousel);

  carousel.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (!item) return;
    const song = randomSongs.find((s) => s.id === item.dataset.id);

    if (e.target.closest(".play-btn")) musicPlayer(song);
    if (e.target.closest(".download-btn")) downloadSong(song);
  });

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  buttons.innerHTML = `
    <button class="prev"><i class="bx bx-left-arrow-alt"></i></button>
    <button class="next"><i class="bx bx-right-arrow-alt"></i></button>
`;
  carouselContainer.append(buttons);

  const carouselNextBtn = document.querySelector(".next");
  const carouselPrevBtn = document.querySelector(".prev");

  carouselNextBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".carousel").appendChild(items[0]);
  });

  carouselPrevBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".carousel").prepend(items[items.length - 1]);
  });
}