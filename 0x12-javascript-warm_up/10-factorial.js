#!/usr/bin/node
function fact (n) {
  if (n) return n * fact(n - 1);
  else return 1;
}
console.log(fact(parseInt(process.argv[2])));
