#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

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
    const todos = JSON.parse(body);
    const completedTasks = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (!completedTasks[todo.userId]) {
          completedTasks[todo.userId] = 0;
        }
        completedTasks[todo.userId]++;
      }
    });
    const formattedOutput = {};
    for (const userId in completedTasks) {
      if (Object.prototype.hasOwnProperty.call(completedTasks, userId)) {
        formattedOutput[userId] = completedTasks[userId];
      }
    }
    console.log(JSON.stringify(formattedOutput));
  } else {
    console.error(`Error: Received status code ${response.statusCode}`);
    process.exit(1);
  }
});
