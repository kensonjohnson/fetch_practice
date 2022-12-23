const searchBar = document.querySelector("[data-search-bar]");
const searchButton = document.querySelector("[data-search-submit]");
const catButton = document.querySelector("[data-change-picture]");
const img = document.querySelector("img");

const defaultImage = await fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=Wo9nuOuYtq1h3xFksM2iFUIBI1BBMEkS&s=cats",
  { mode: "cors" }
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return response.data.images.original.url;
  });

img.src = defaultImage;

searchButton.addEventListener("click", () => {
  const input = searchBar.value;
  searchBar.value = "";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Wo9nuOuYtq1h3xFksM2iFUIBI1BBMEkS&s=${input}`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch(() => {
      img.src = defaultImage;
    });
});

catButton.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Wo9nuOuYtq1h3xFksM2iFUIBI1BBMEkS&s=cats",
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    });
});
