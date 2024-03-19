/*
 * @lc app=leetcode.cn id=1793 lang=javascript
 *
 * [1793] 好子数组的最大分数
 */

// overtime
// var maximumScore = function (nums, k) {
//   let dp = new Array(k + 1).fill(0).map(() => new Array(nums.length).fill(0));
//   for (let i = 0; i <= k; i++) {
//     for (let j = nums.length - 1; k <= j; j--) {
//       dp[i][j] = Math.min(...nums.slice(i, j + 1)) * (j - i + 1);
//     }
//   }
//   return Math.max(...dp.flat(1));
// };

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  let n = nums.length;
  let left = k - 1,
    right = k + 1;
  let ans = 0;
  for (let i = nums[k]; ; --i) {
    while (left >= 0 && nums[left] >= i) {
      --left;
    }
    while (right < n && nums[right] >= i) {
      ++right;
    }
    ans = Math.max(ans, (right - left - 1) * i);
    if (left === -1 && right === n) {
      break;
    }
  }
  return ans;
};
// @lc code=end
