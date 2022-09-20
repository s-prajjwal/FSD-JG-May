/**
 * console.log("hello");

function countWays(n, dp) {
  if (n == 1 || n == 2) return n;

  if (dp[n]) return dp[n];

  dp[n] = countWays(n - 1, dp) + countWays(n - 2, dp);
  return dp[n];
}

let dp = {}; // 100
countWays(5, dp);

function countWaysTab(n) {
  let dp = { 1: 1, 2: 2 };
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
 */

let nums = [1, 1, 2];
let newArray = [];
var removeDuplicates = function (nums) {
  let newArray = [];
  let i = 0;
  while (i < nums.length) {
    if (newArray === nums) {
      i++;
    } else {
      newArray.push(nums[i]);
      i++;
    }
  }
  return newArray;
};
console.log(removeDuplicates(nums));

{
  var b = 7;
  {
    let a = 5;
    var b = 6;
  }

  a = 10;
}

console.log(a);
console.log(b);
