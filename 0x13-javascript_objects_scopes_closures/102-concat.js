#!/usr/bin/node
const fs = require('fs');
const txt1 = fs.readFileSync(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
});
const txt2 = fs.readFileSync(process.argv[3], 'utf-8', (err, data) => {
  if (err) throw err;
});
const txt3 = txt1 + txt2;
fs.writeFileSync(process.argv[4], txt3, (err) => {
  if (err) throw err;
});
