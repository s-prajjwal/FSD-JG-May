// To find 7th element in the fibonacci series

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(200));

function fibMemo(n, dp) {
  if (n < 2) return n;

  // n - 4
  if (dp[n]) return dp[n];

  dp[n] = fibMemo(n - 1, dp) + fibMemo(n - 2, dp);
  return dp[n];
}

function fibTab(n) {
  let dp = { 0: 0, 1: 1 };
  for (var i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibTab(7));

// console.log(fibMemo(1000, {}));

// nxm

function diagonalSum(matrix, i, j, sum) {
  if (i > matrix.length || j > matrix[0].length) return;

  sum += matrix[i][j] + diagonalSum(matrix, i + 1, j + 1, sum);
  return sum;
}

diagonalSum(matrix, 0, 0, 0);
