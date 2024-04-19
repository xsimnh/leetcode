/*
 * @lc app=leetcode.cn id=1883 lang=javascript
 *
 * [1883] 准时抵达会议现场的最小跳过休息次数
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function (dist, speed, hoursBefore) {
  const sum = dist.reduce((acc, cur) => (acc += cur), 0);
  if (sum > hoursBefore * speed) {
    return -1;
  }
  const n = dist.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.ceil((dp[i - 1][0] + dist[i - 1]) / speed) * speed;
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1] + dist[i - 1], Math.ceil((dp[i - 1][j] + dist[i - 1]) / speed) * speed);
    }
    dp[i][i] = dp[i - 1][i - 1] + dist[i - 1];
  }
  for (let i = 0; i < n; i++) {
    if (dp[n - 1][i] <= hoursBefore * speed - dist[n - 1]) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
