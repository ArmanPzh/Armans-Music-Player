fetch: https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all&search={SEARCH_KEYWORD}
no search fetch for home page: https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all

client id : a0d1251f

limit is 200 so limit=all also gets an array of 200 songs

example object:
{
    "id": "242",
    "name": "Réveille le Hippie",
    "duration": 248,
    "artist_id": "5",
    "artist_name": "Both",
    "artist_idstr": "both",
    "album_name": "Simple Exercice",
    "album_id": "33",
    "license_ccurl": "",
    "position": 2,
    "releasedate": "2004-12-28",
    "album_image": "https://usercontent.jamendo.com?type=album&id=33&width=300&trackid=242",
    "audio": "https://prod-1.storage.jamendo.com/?trackid=242&format=mp31&from=qjRNTHbrNWXuw9o%2BM87O3Q%3D%3D%7CtiR%2Fv3Sqg2ymtDert5gnWw%3D%3D",
    "audiodownload": "https://prod-1.storage.jamendo.com/download/track/242/mp32/",
    "prourl": "",
    "shorturl": "https://jamen.do/t/242",
    "shareurl": "https://www.jamendo.com/track/242",
    "audiodownload_allowed": true,
    "content_id_free": false,
    "image": "https://usercontent.jamendo.com?type=album&id=33&width=300&trackid=242"
}

features:
    search
    download
    stream

must have 7 js functionalities including:
    fetch -obviously
    hamburger menu
    slider - my own carousel

must be responsive down to 300px
