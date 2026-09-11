async function getSongs() {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
async function getPlaylists() {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/playlists/?client_id=a0d1251f&format=json&limit=all`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
async function getArtists() {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/artists/?client_id=a0d1251f&format=json&limit=all`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

const songs = await getSongs();
const playlists = await getPlaylists();
const artists = await getArtists();

export { songs, playlists, artists };
