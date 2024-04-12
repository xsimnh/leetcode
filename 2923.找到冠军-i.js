/*
 * @lc app=leetcode.cn id=2923 lang=javascript
 *
 * [2923] 找到冠军 I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  let champion = 0;
  for (let i = 1; i < grid.length; i++) {
    champion = grid[i][champion] === 1 ? i : champion;
  }
  return champion;
};
// @lc code=end
