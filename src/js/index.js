// const key = "YOURKEYHERE";

import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

//search bar
// get query, push into key, display results
const search = function () {};

// const queryResults = DOMSelectors.searchBox.value;
// console.log(queryResults);
const query = async function () {
  try {
    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=`);
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
    alert("There is an error");
  }
};

query();
