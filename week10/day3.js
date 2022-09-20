const arr = ["ab", "ac", "ae", "ag", "bj", "cm", "dp", "dz"];
let target = "az";
// binary search

let left = 0;
let right = arr.length - 1;

let resIndex = -1;
let count = 0;
while (left <= right) {
  count++;
  let midIndex = Math.floor((left + right) / 2);
  if (arr[midIndex] === target) {
    resIndex = midIndex;
    break;
  } else if (arr[midIndex] > target) {
    right = midIndex - 1;
  } else if (target > arr[midIndex]) {
    left = midIndex + 1;
  }

  if (left > right) {
    console.log(-1);
  }
}

/* Q - 2) Write a program to print sum of border elements of a square Matrix */
let mat = [
  [1, 2, 3, 12],
  [4, 5, 6, 11],
  [7, 8, 9, 10],
];
// let n = mat.length;
// let result = 0;
// let m = mat[0].length;
// for (i = 0; i < n; i++) {
//   for (j = 0; j < m; j++) {
//     if (i === 0 || i === n - 1) {
//       result += mat[i][j];
//     } else {
//       result += mat[i][0];
//       result += mat[i][m - 1];
//       break;
//     }
//   }
// }
// console.log(result);

const i = require("prompt-sync")()("Enter a num");
let matrix = [];
for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i].push(parseInt(require("prompt-sync")()("ENter a num - ")));
  }
}
console.log(matrix);

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const line1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const line2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const line3 = ["z", "x", "c", "v", "b", "n", "m"];

  let resultArr = [];

  for (let i = 0; i < words.length; i++) {
    let count = 0;
    words[i].split("").forEach((char, index) => {
      if (index === 0) {
        line1.indexOf(char.toLowerCase() >= 0 ? count++ : "");
      } else {
        line1.indexOf(char) >= 0 ? count++ : "";
      }
    });
    if (count === words[i].length) {
      resultArr.push(words[i]);
      continue;
    }
    count = 0;
    words[i].split("").forEach((char, index) => {
      if (index === 0) {
        line2.indexOf(char.toLowerCase() >= 0 ? count++ : "");
      } else {
        line2.indexOf(char) >= 0 ? count++ : "";
      }
    });
    if (count === words[i].length) {
      resultArr.push(words[i]);
      continue;
    }

    count = 0;
    words[i].split("").forEach((char, index) => {
      if (index === 0) {
        line3.indexOf(char.toLowerCase() >= 0 ? count++ : "");
      } else {
        line3.indexOf(char) >= 0 ? count++ : "";
      }
    });
    if (count === words[i].length) {
      resultArr.push(words[i]);
      continue;
    }
  }

  return resultArr;
};
