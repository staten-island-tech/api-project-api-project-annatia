import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.completed.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;

    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${searchParams}`
        );
        const data = await response.json();
        console.log(data.results);
        data.results.forEach((anime) => {
          DOMSelectors.completed.insertAdjacentHTML(
            "beforeend",
            `  <div class="anime-card">
                    <div class="anime-card-front">
                      <img
                        src="${anime.image_url}"
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
                  </div> `
          );
        });
      } catch (error) {
        console.log(error);
        alert("something wrong");
      }
    };
    searchQuery();
  });
};

listen();
