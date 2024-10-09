const URL = `https://icanhazdadjoke.com/`;

const containerDiv = document.getElementById("jokeDiv");
const jokeP = document.getElementById("jokeText");

function fetchJoke() {
  jokeP.textContent = "Loading your joke...";
  
  fetch(URL, { headers: {'Accept':'application/json'}})
  .then(response => response.json())
  .then(data => {
    jokeP.textContent = data.joke;
  });
}
fetchJoke();

const jokeButton = document.getElementById("getNewJoke");
jokeButton.addEventListener("click", fetchJoke);