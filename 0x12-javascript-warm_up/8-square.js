#!/usr/bin/node
const myArg = parseInt(process.argv[2]);
if (myArg) {
  for (let i = 0; i < myArg; i++) {
    console.log('X'.repeat(myArg));
  }
} else {
  console.log('Missing size');
}
