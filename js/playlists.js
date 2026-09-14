"use strict";
import { playlists } from "./getData.js";
import musicPlayer from "./musicPlayer.js";

const playlistsContainerEl = document.querySelector(".playlists-container");
const hamburger = document.querySelector("#hamburger");
const navUlEl = document.querySelector("header > nav > ul");

hamburger.addEventListener("click", () => {
  navUlEl.classList.toggle("show-menu");
});

playlistsContainerEl.innerHTML = playlists
  .map(
    (playlist) => `
        <div class="playlist-card" data-id="${playlist.id}">
            <div class="playlist-cover"><i class='bx bxs-playlist'></i></div>
            <h3>${playlist.name}</h3>
            <p>by ${playlist.user_name}</p>
            <div class="playlist-buttons">
                <button class="play-btn"><i class='bx bx-play'></i> Play</button>
                <button class="download-btn"><i class='bx bxs-download'></i></button>
            </div>
        </div>
    `,
  )
  .join("");

async function getPlaylistTracks(id) {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/playlists/tracks/?client_id=a0d1251f&format=json&limit=all&id=${id}`,
    );
    const data = await response.json();
    return data.results?.[0]?.tracks ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

playlistsContainerEl.addEventListener("click", async (e) => {
  const card = e.target.closest(".playlist-card");
  if (!card)
    return;
  const playlist = playlists.find((p) => p.id === card.dataset.id);

  if (e.target.closest(".download-btn")) {
    const link = document.createElement("a");
    link.href = playlist.zip;
    link.download = `${playlist.name}.zip`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }

  const playBtn = card.querySelector(".play-btn");
  if (!e.target.closest(".play-btn") || playBtn.disabled)
    return;

  const originalBtnContent = playBtn.innerHTML;
  playBtn.disabled = true;
  playBtn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> Loading...`;

  const tracks = await getPlaylistTracks(playlist.id);

  playBtn.disabled = false;
  playBtn.innerHTML = originalBtnContent;

  if (!tracks.length) {
    alert("This playlist has no playable tracks.");
    return;
  }
  
  musicPlayer(tracks[0], tracks, 0);
});