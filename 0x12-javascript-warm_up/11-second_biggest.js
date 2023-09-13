#!/usr/bin/node
if (process.argv[3]) {
  process.argv.sort(function (a, b) { return b - a; });
  console.log(process.argv[3]);
} else {
  console.log(0);
}
