#!/usr/bin/env node
const limit = require('./limit');
const format = require('./format');

function validHandler(funcs: Array<Function>): true | LimitError | FormatError {
  let ret: true | LimitError | FormatError;
  for (let func of funcs) {
    ret = func();
    if (ret !== true) return ret;
  }
  return true;
}

module.exports = {
  validHandler,
  limit,
  format,
};
