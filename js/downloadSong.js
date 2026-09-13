export default function downloadSong(song) {
  if (!song.audiodownload_allowed) {
    alert("Download isn't allowed for this track.");
    return;
  }
  const link = document.createElement("a");
  link.href = song.audiodownload;
  link.download = `${song.artist_name} - ${song.name}.mp3`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}