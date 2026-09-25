const jokeButton = document.querySelector('#joke-btn');
const jokeText = document.querySelector('#joke');

jokeButton.addEventListener('click', getJoke);

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        jokeText.textContent = data.value;
      } else {
        jokeText.textContent = 'Something went wrong on the server (not funny)';
      }
    }
  };

  xhr.send();
}

document.addEventListener('DOMContentLoaded', getJoke);
