const API_KEY = "fcdbafa0-6bf0-4494-9f28-03a0ba05ef4f";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "aplication/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <div class="movie__cover-inner">
      <img
      src="${movie.posterUrlPreview}
        class="movier__cover"
        alt='${movie.nameRu}'
      />
      <div class="movie__cover--darkened"></div>
    </div>
    <div class="movie__info">
      <div class="movie__title">${movie.nameRu}</div>
      <div class="movie__category">${movie.genres.map(
        (genre) => `${genre.genre}`
      )}</div>
      <div class="movie__average--green movie__average">9</div>
    </div>
  </div>`;

    moviesEl.appendChild(movieEl);
  });
}
