'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxDepth } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#maxDepth', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, 5, 6, 7, 8],
      result: 4,
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7],
      result: 3,
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7, null],
      result: 3,
    },
    {
      root: [0, null, 0, null, 0, 1, 2, 1, 2],
      result: 5,
    },
  ];

  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(maxDepth(root), result);
    });
  });
});
