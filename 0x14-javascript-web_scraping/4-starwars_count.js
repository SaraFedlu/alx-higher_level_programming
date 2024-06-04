#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = '18';

if (!apiUrl) {
  console.error('Error: No API URL provided');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach(film => {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        count++;
      }
    });

    console.log(count);
  } else {
    console.error(`Error: Received status code ${response.statusCode}`);
    process.exit(1);
  }
});
