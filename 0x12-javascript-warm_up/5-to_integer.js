#!/usr/bin/node

const myVar = parseInt(process.argv[2]);
if (!isNaN(myVar)) {
  console.log(myVar);
} else {
  console.log('Not a number');
}
