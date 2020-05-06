'use strict';

const assert = require('assert');
const _ = require('lodash');

const { firstUniqChar } = require('./');

describe('#firstUniqChar', () => {
  const tests = [
    {
      s: 'leetcode',
      result: 0,
    },
    {
      s: 'loveleetcode',
      result: 2,
    },
    {
      s: '',
      result: -1,
    },
    {
      s: 'dddccdbba',
      result: 8,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(firstUniqChar(s), result);
    });
  });
});
