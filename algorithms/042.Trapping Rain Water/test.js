'use strict';

const assert = require('assert');
const _ = require('lodash');
const { trap2: trap } = require('./');

describe('#trap', () => {

  const tests = [{
    height: [2, 1, 2],
    result: 1
  }, {
    height: [2, 1, 2, 1],
    result: 1
  }, {
    height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    result: 6
  }, {
    height: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 1],
    result: 1
  }, {
    height: [9, 5, 7, 1, 10, 10, 7, 0, 8, 8],
    result: 23
  }, {
    height: [42, 7, 8, 18, 19, 28, 14, 6, 57, 19, 71, 67, 80, 90, 99, 85, 82, 23, 86, 49, 68, 25, 95, 48, 16, 7, 2, 66, 73, 86, 8, 21, 68, 69, 98, 89, 34, 6, 81, 73, 18, 84, 65, 75, 3, 51, 78, 23, 12, 40, 81, 4, 53, 42, 97, 97, 99, 53, 96, 34, 28, 9, 71, 76, 99, 51, 94, 21, 37, 69, 54, 72, 11, 3, 47, 51, 39, 52, 70, 84, 26, 26, 84, 31, 67, 69, 36, 42, 44, 44, 41, 50, 84, 24, 97, 28, 33, 3, 15, 64],
    result: 4007
  }];

  _.forEach(tests, ({ height, result }) => {
    it(`[${height}] -> ${result}`, () => {
      assert.strictEqual(trap(height), result);
    });
  });
});
