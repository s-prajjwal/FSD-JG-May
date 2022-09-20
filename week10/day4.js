function greet(n) {
  console.log("Hello");
  if (n === 1) {
    return 1;
  } else {
    let i = greet(--n);
    console.log(i);
    return n;
  }
}

greet(5);

// Write a program to print sum of border elements of a square Matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [10, 11, 12],
  [7, 8, 9],
];
let n = matrix.length;
let m = matrix[0].length;

let borderelements = (matrix) => {
  let edge =
    matrix[0][0] + matrix[0][m - 1] + matrix[n - 1][0] + matrix[n - 1][m - 1];
  let border1 = 0;
  let border2 = 0;
  let border3 = 0;
  let border4 = 0;
  for (let i = 0, j = 0; i < n; i++, j++) {
    if (j < m) {
      border1 += matrix[0][j];
      border2 += matrix[n - 1][j];
    }
    border3 += matrix[i][0];
    border4 += matrix[i][m - 1];
  }
  console.log(border1, border2, border3, border4);
  return border1 + border2 + border3 + border4 - edge;
};
console.log(borderelements(matrix));
