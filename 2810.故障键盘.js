/*
 * @lc app=leetcode.cn id=2810 lang=javascript
 *
 * [2810] 故障键盘
 */

// var finalString = function (s) {
//     let result = [];
//     for (let char of s) {
//       if (char == "i") {
//         result = result.reverse();
//       } else {
//         result.push(char);
//       }
//     }
//     return result.join("");
//   };

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = [];
  let flag = true;
  for (let char of s) {
    if (char === "i") {
      flag = !flag;
    } else {
      if (flag) {
        result.push(char);
      } else {
        result.unshift(char);
      }
    }
  }
  return flag ? result.join("") : result.reverse().join("");
};
// @lc code=end
