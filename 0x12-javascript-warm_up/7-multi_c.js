#!/usr/bin/node
const myStr = 'C is fun';
const myArg = parseInt(process.argv[2]);
if (myArg) {
  for (let i = 0; i < myArg; i++) {
    console.log(myStr);
  }
} else {
  console.log('Missing number of occurrences');
}
