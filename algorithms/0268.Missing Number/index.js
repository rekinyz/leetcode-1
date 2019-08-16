'use strict';

module.exports = { missingNumber, missingNumber2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const l = nums.length;
  const array = Array(l);
  for (let i = 0; i < l; i++) {
    array[nums[i]] = true;
  }
  for (let i = 0; i < l; i++) {
    const n = array[i];
    if (!n) {
      return i;
    }
  }
  return l;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber2(nums) {
  nums.sort();
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    l ^= i;
    l ^= nums[i];
  }
  return l;
}
