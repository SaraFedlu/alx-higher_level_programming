#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
  console.error('Error: No movie ID provided');
  process.exit(1);
}

const movieApiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(movieApiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    const movie = JSON.parse(body);
    const characterUrls = movie.characters;

    const characterPromises = characterUrls.map(url => {
      return new Promise((resolve, reject) => {
        request(url, (charError, charResponse, charBody) => {
          if (charError) {
            reject(charError);
          } else if (charResponse.statusCode !== 200) {
            reject(`Error: Received status code ${charResponse.statusCode} for character URL ${url}`);
          } else {
            resolve(JSON.parse(charBody).name);
          }
        });
      });
    });

    Promise.all(characterPromises)
      .then(characterNames => {
        characterNames.forEach(name => console.log(name));
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  } else {
    console.error(`Error: Received status code ${response.statusCode} for movie ID ${movieId}`);
    process.exit(1);
  }
});
