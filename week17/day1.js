let str1 = "ADREGHX";
let str2 = "AEFGYHMX"; // AGHFX

function lcs(str1, str2, s1, s2, dp) {
  // base condition
  if (s1 === str1.length || s2 === str2.length) return 0;

  if (dp[s2][s1]) return dp[s2][s1];

  if (str1[s1] === str2[s2]) {
    dp[s2][s1] = 1 + lcs(str1, str2, s1 + 1, s2 + 1, dp);
    return dp[s2][s1];
  }
  dp[s2][s1 + 1] = lcs(str1, str2, s1 + 1, s2, dp);
  dp[s2 + 1][s1] = lcs(str1, str2, s1, s2 + 1, dp);
  dp[s2][s1] = Math.max(dp[s2][s1 + 1], dp[s2 + 1][s1]);
  return dp[s2][s1];
}

let dp = new Array(str2.length + 1).fill(new Array(str1.length + 1).fill(null));
// console.log(dp);

console.log(lcs(str1, str2, 0, 0, dp));
// console.log(dp);

function inorder(root, sum, dp) {
  // Base condition
  if (root === null) return 0;
  dp[root.left.data] = inorder(root.left, sum, dp);
  dp[root.right.data] = inorder(root.right, sum, dp);

  sum += dp[root.left.data] + dp[root.right.data] + root.data;
  return sum;
}

let dp1 = {};
inorder(root, 0, dp);
console.log(Math.max(...dp1));
