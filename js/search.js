const searchFormEl = document.querySelector("#search-container");
const searchResultContainerEl = document.querySelector(
  ".search-result-container"
);
const searchEl = document.querySelector("#search");

export default function search() {
  searchFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const keyword = searchEl.value;
      const response = await fetch(
        `https://api.jamendo.com/v3.0/tracks/?client_id=a0d1251f&format=json&limit=all&search=${keyword}`,
      );
      const searchObjects = await response.json();
      const searchResult = searchObjects.results;
      searchResultContainerEl.innerHTML = searchResult
        .map((item) =>  `
        <div class="search-result-element">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.artist_name}</p>
        </div>`
        )
        .join("");
      searchEl.value = "";
      if(searchObjects.headers.results_count == 0)
        alert("no matching results");
    } catch (error) {
      console.log(error);
    }
  });
}
