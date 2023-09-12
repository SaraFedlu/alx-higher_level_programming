#!/usr/bin/node

const parentSq = require('./5-square');

module.exports = class Square extends parentSq {
  charPrint (c) {
    if (c === 'c' || c === 'C') {
      for (let i = 0; i > super.size; i++) {
        console.log(c.repeat(super.size));
      }
    } else {
      super.print();
    }
  }
};
