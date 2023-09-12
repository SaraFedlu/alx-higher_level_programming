#!/usr/bin/node

const myArr = process.argv;
if (myArr[2]) {
  console.log(myArr[2]);
} else {
  console.log('No argument');
}
