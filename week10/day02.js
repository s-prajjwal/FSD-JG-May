const arr = ["apple", "watermelon", "banana", "guava", "banana", "apple"];
let target = "banana";
// algo for linear search

// let allIndexes = [];
for (let i = 0; i < arr.length; i++) {
  // a condition to match the ith element of array with the target
  if (arr[i] === target) {
    console.log(i);
    break;
  } else if (i === arr.length - 1) {
    console.log("Not found");
  }
}
// allIndexes.forEach((index) => console.log(arr[index]));

let indexObj = {};
for (let i = 0; i < arr.length; i++) {
  let currentFruit = arr[i];
  if (currentFruit in indexObj) {
    indexObj[currentFruit].push(i);
  } else {
    indexObj[currentFruit] = [i];
  }
}
// console.log(indexObj);

/**
 * {
 *  "apple": [0, 5],
 *  "watermelon": [1],
 *  "banana": [2, 4],
 *  "guava": [3]
 * }
 */

const numArr = [2, 11, 5, 9, 3, 27, 13];
let targetNum = 24;

// for (let i = 0; i < numArr.length; i++) {
//   // a condition to match the ith element of array with the target
//   if (numArr[i] === targetNum) {
//     console.log(i);
//     break;
//   } else if (i === numArr.length - 1) {
//     console.log("Not found");
//   }
// }
