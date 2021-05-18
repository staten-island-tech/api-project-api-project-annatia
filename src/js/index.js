// const key = "YOURKEYHERE";

import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

//search bar
// get query, push into key, display results
const search = function () {};

// const queryResults = DOMSelectors.searchBox.value;
// console.log(queryResults);

/*
const searchQuery = ref("");
const query = async function () {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchQuery.value}`
    );
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
    alert("There is an error");
  }
};

query();
*/

const animeList = function (setAnimeList) {
  [""];
};

const fetchAnime = async (query) => {
  const queryResult = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`
  ).then((res) => res.json());

  console.log(queryResult.results);

  setAnimeList(queryResult.results);
};

fetchAnime();
return setAnimeList;
animeList();






const something = async function(){
  try{
    const response = await fetch('https://api.jikan.moe/v3/search/anime?status=completed');
    const data = await response.json();
    data.results.forEach((anime) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend",
      `  <div class="anime-card">
      <div class="anime-card-front">
        <img
          src="https://placehold.it/150x250"
          alt=""
          class="poster"
        />
      </div>
      <div class="anime-card-back">
        <h3 class="anime-card-header">${anime.title}</h3>
        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">${anime.start_date}</p>
        </div>
      </div>
    </div> `);
    });
  } catch (error) {
    console.log(error);
    alert("something wrong");
  }
};
something();