const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/tomarnogueiracoding/repos');

// readyState has 5 possible values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing requested
// 4: request finished and response is ready

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);

//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${movie.title}</strong>, ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Repository name:</strong> ${repo.name} - Language ${repo.language}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
