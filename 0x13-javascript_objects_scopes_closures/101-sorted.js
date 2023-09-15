#!/usr/bin/node
const dict = require('./101-data').dict;
const sortedDict = {};
for (const [key, val] of Object.entries(dict)) {
  if (sortedDict[val]) {
    sortedDict[val].push(key);
  } else {
    sortedDict[val] = [key];
  }
}
console.log(sortedDict);
