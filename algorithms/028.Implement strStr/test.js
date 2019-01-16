'use strict';

const assert = require('assert');
const _ = require('lodash');
const { strStr } = require('./');

describe('#strStr', () => {
  const tests = [
    {
      haystack: 'abcdabc',
      needle: 'da',
      result: 3,
    },
    {
      haystack: '',
      needle: '',
      result: 0,
    },
    {
      haystack: 'aaa',
      needle: 'aab',
      result: -1,
    },
    {
      haystack: '',
      needle: 'a',
      result: -1,
    },
    {
      haystack: 'a',
      needle: '',
      result: 0,
    },
    {
      haystack: 'ab',
      needle: 'c',
      result: -1,
    },
    {
      haystack: 'mississippi',
      needle: 'issip',
      result: 4,
    },
    {
      haystack: 'abaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadefefeggg',
      needle: 'eggg',
      result: 56,
    },
  ];

  _.forEach(tests, ({ haystack, needle, result }) => {
    it(`str:${haystack}, needle:${needle} -> ${result}`, () => {
      assert.strictEqual(strStr(haystack, needle), result);
    });
  });
});
