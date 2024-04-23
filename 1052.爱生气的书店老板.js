/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let result = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      result += customers[i];
      customers[i] = 0;
    }
  }
  let last = 0,
    max = 0;
  for (let i = 0; i < customers.length; i++) {
    last += customers[i];
    if (i >= minutes) {
      last -= customers[i - minutes];
    }
    max = Math.max(max, last);
  }
  return result + max;
};
// @lc code=end
