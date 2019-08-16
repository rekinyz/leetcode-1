'use strict';

const assert = require('assert');
const _ = require('lodash');
const { constructMaximumBinaryTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#constructMaximumBinaryTree', () => {
  const tests = [
    {
      nums: [3, 2, 1, 6, 0, 5],
      result: [6, 3, 5, null, 2, 0, null, null, 1],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ nums, result, _result }) => {
    it(`[${nums}] -> [${_result}]`, () => {
      assert.deepEqual(constructMaximumBinaryTree(nums), result);
    });
  });
});
