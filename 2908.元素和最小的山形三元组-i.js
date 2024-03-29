/*
 * @lc app=leetcode.cn id=2908 lang=javascript
 *
 * [2908] 元素和最小的山形三元组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let MAX = 3 * 50;
  let length = nums.length,
    sum = MAX;
  let left = new Array(length),
    right = new Array(length);
  left[0] = nums[0];
  right[length - 1] = nums[length - 1];
  for (let i = 1; i < length - 1; i++) {
    left[i] = Math.min(left[i - 1], nums[i]);
    right[length - i - 1] = Math.min(right[length - i], nums[length - i - 1]);
  }
  for (let i = 1; i < length - 1; i++) {
    if (left[i] < nums[i] && right[i] < nums[i]) {
      sum = Math.min(sum, left[i] + nums[i] + right[i]);
    }
  }
  return sum === MAX ? -1 : sum;
};
// @lc code=end
