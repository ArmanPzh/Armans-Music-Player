let currentPlayerBar = null;

export default function musicPlayer(song, queue = [song], index = 0) {
  if (currentPlayerBar) {
    currentPlayerBar.querySelector("audio")?.pause();
    currentPlayerBar.remove();
  }

  const playerBar = document.createElement("section");
  playerBar.classList.add("player-bar");
  playerBar.innerHTML = `
    <img src="${song.image}" alt="${song.artist_name}">
    <h4>${song.name}</h4>
    <p>${song.artist_name}</p>
    <div class="music-controls">
      <button class="prev-button"><i class='bx bx-skip-previous'></i></button>
      <button class="toggle-play-button"><i class='bx bx-pause'></i></button>
      <button class="next-button"><i class='bx bx-skip-next'></i></button>
    </div>
      <input class="volume-bar" type="range" min="0" max="100" value="100">
    <audio controls></audio>
  `;

  document.body.appendChild(playerBar);
  currentPlayerBar = playerBar;

  const audioEl = playerBar.querySelector("audio");
  audioEl.src = song.audio;
  const volumeEl = document.querySelector('.volume-bar');
  volumeEl.addEventListener('input', () => {
    audioEl.volume = volumeEl.value / 100;
  });
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
    if (index == 0)
      audioEl.currentTime = 0;
    else
      musicPlayer(queue[index - 1], queue, index - 1);
      
  })

  const nextBtn = playerBar.querySelector('.next-button');
  nextBtn.addEventListener('click', () => {
    if (playerBar !== currentPlayerBar) return;
    if (index < queue.length - 1) {
      musicPlayer(queue[index + 1], queue, index + 1);
    }
  });

  audioEl.addEventListener('ended', () => {
    if (playerBar !== currentPlayerBar) return;
    if (index < queue.length - 1) {
      musicPlayer(queue[index + 1], queue, index + 1);
    }
  });
}