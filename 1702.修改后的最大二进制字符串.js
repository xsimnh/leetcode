/*
 * @lc app=leetcode.cn id=1702 lang=javascript
 *
 * [1702] 修改后的最大二进制字符串
 */

// @lc code=start
/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  const length = binary.length;
  const string = binary.split("");
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (string[i] === "0") {
      while (j <= i || (j < length && string[j] === "1")) {
        j++;
      }
      if (j < length) {
        string[j] = "1";
        string[i] = "1";
        string[i + 1] = "0";
      }
    }
  }
  return string.join("");
};
// @lc code=end
