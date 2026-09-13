let currentPlayerBar = null;

export default function musicPlayer(song) {
  if (currentPlayerBar)
    currentPlayerBar.remove();

  const playerBar = document.createElement("section");
  playerBar.classList.add("player-bar");
  playerBar.innerHTML = `
    <button class="prev-button"><i class='bx bx-skip-previous'></i></button>
    <button class="toggle-play-button"><i class='bx bx-pause'></i></button>
    <button class="next-button"><i class='bx bx-skip-next'></i></button>
    <audio controls></audio>
  `;

  document.body.appendChild(playerBar);
  currentPlayerBar = playerBar;

  const audioEl = playerBar.querySelector("audio");
  audioEl.src = song.audio;
  audioEl.play();

  const toggleBtn = playerBar.querySelector(".toggle-play-button");
  toggleBtn.addEventListener("click", () => {
    if (audioEl.paused) {
      audioEl.play();
      toggleBtn.innerHTML = `<i class='bx bx-pause'></i>`;
    } else {
      audioEl.pause();
      toggleBtn.innerHTML = `<i class='bx bx-play'></i>`;
    }
  });

  const prevBtn = document.querySelector('.prev-button');
  prevBtn.addEventListener('click', () => {
    audioEl.currentTime = 0;
  })

}
