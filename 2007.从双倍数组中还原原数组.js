/*
 * @lc app=leetcode.cn id=2007 lang=javascript
 *
 * [2007] 从双倍数组中还原原数组
 */

// @lc code=start
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  changed.sort((a, b) => a - b);
  const count = {};
  for (const num of changed) {
    count[num] = (count[num] ?? 0) + 1;
  }
  const result = [];
  for (const num of changed) {
    if (count[num] === 0) {
      continue;
    }
    count[num]--;
    if (!count[num * 2]) {
      return [];
    }
    result.push(num);
    count[num * 2]--;
  }
  return result;
};
// @lc code=end
