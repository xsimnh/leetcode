/*
 * @lc app=leetcode.cn id=2924 lang=javascript
 *
 * [2924] 找到冠军 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  let count = new Array(n).fill(0);
  edges.forEach((edge) => {
    count[edge[1]]++;
  });
  let champion = -1;
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) {
      if (champion === -1) {
        champion = i;
      } else {
        return -1;
      }
    }
  }
  return champion;
};
// @lc code=end
