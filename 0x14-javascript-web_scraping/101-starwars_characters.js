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

    characterUrls.forEach(url => {
      request(url, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(charError);
          return;
        }

        if (charResponse.statusCode === 200) {
          const character = JSON.parse(charBody);
          console.log(character.name);
        } else {
          console.error(`Error: Received status code ${charResponse.statusCode} for character URL ${url}`);
        }
      });
    });
  } else {
    console.error(`Error: Received status code ${response.statusCode} for movie ID ${movieId}`);
    process.exit(1);
  }
});
