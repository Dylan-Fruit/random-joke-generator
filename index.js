const url = "https://geek-jokes.sameerkumar.website/api";

const randomJokeResult = document.querySelector(".random-joke-result");
const randomJokeBtn = document.querySelector(".random-joke-btn");
randomJokeResult.style.display = "none";

function fetchJokes() {
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        randomJokeResult.innerHTML = data;
      })
    )
    .catch((error) => console.log(error));
}

console.log(fetchJokes());

randomJokeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  randomJokeResult.style.display = "block";
  fetchJokes();
});
