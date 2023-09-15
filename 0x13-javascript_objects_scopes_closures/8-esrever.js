#!/usr/bin/node
exports.esrever = function (list) {
  const len = list.length - 1;
  const revArray = [];
  for (let i = len; i >= 0; i--) {
    revArray[len - i] = list[i];
  }
  return revArray;
};
