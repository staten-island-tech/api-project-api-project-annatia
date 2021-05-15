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
