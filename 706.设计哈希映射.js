/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.data = [];
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.map[key];
  if (isNaN(index)) {
    this.map[key] = this.data.length;
    this.data.push([key, value]);
    return;
  }
  this.data[index] = [key, value];
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.map[key];
  if (isNaN(index)) {
    return -1;
  }
  return this.data[index][1];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.map[key];
  if (isNaN(index)) {
    return false;
  }
  this.data.slice(index, 1);
  delete this.map[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
