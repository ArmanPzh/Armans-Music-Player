'use strict'
async function getData() {
    try {
        const response = await fetch(
            `https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all`
        );

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

const songs = await getData();

export default songs;