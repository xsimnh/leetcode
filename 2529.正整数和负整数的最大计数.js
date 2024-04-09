/*
 * @lc app=leetcode.cn id=2529 lang=javascript
 *
 * [2529] 正整数和负整数的最大计数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num > 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  const pos = nums.length - right;
  left = 0;
  right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const neg = left;
  return Math.max(pos, neg);
};
// @lc code=end
