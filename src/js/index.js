import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

// const key = "YOURKEYHERE";

// var requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}`;

const query = async function () {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}`
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
    alert("There is an error");
  }
};

query();
