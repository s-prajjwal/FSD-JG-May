// Merging Part of Merge Sort
// Assumption: You're getting 2 arrays which are individually sorted

// Pseudo Code:

/**
 *  1. Take 2 pointers, one for each array and create an empty array (res) to insert the elements in ascending order
    2. Run a loop while p1 is less than length of arr1 and p2 is less than length of arr2:
        a. compare the element at p1 and element at p2:
            i. if element at p1 < element at p2:
                A. push the element at p1 into res
                B. shift p1 to the next element
           ii. if element at p2 < element at p1:
                A. push the element at p2 into res
                B. shift p2 to the next element
    3. Insert remaining elements of both the arrays arr1 and arr2
    4. Return the res array.
 */

const arr1 = [3, 12, 31, 49];
const arr2 = [5, 9, 20];

// [5, 5, 9]

// [3, 5, 9, 12, 17, 19, 20, 21]

function merge(arr1, arr2) {
  let n1 = arr1.length; // 4
  let n2 = arr2.length; //

  // Step 1 of pseudo code
  let p1 = 0; // this is index
  let p2 = 0; // this is index
  let res = [];

  // Step 2:
  // while p1 is inside arr1 and p2 is inside arr2
  // if anyone of p1 and p2 exceeds the length of their respective array, then stop the loop
  while (p1 < n1 || p2 < n2) {
    if (arr1[p1] <= arr2[p2]) {
      res.push(arr1[p1]);
      p1++; // shifting p1
    } else {
      res.push(arr2[p2]);
      p2++; //shift p2
    }
  }

  // Let's say if p1 is already >= n1 -> this loop will not run
  while (p1 < n1) {
    res.push(arr1[p1]);
    p1++;
  }

  // Let's say if p2 is already > n2 -> this loop will not run
  while (p2 < n2) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}

// Time Complexity - O(N)
// Space Complexity - S(N)

console.log(merge(arr1, arr2));

// Pseudo Code of Divide part of Merge Sort:

/**
 * 
 * 1. Repeat it until you find array of length 1:
    a. l =0
    b. r = length-1 of current array
    c. mid = (l+r)/2
    d. arr1 = array from l -> mid
    e. arr2 = array from mid+1 -> r
 2. start calling merge function for pairs of 2 arrays
 */

function mergeSort(arr, l, r) {
  // divide this array in continuous
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    let arr1 = mergeSort(arr, l, mid);
    let arr2 = mergeSort(arr, mid + 1, r);
    return merge(arr1, arr2);
  } else {
    return arr;
  }
}

const arr = [31, 7, 12, 5, 9, 20];
let l = 0;
let r = arr.length - 1;
let result = mergeSort(arr, l, r);
console.log(result);

function isPalin(str) {
  if (str.length === 1) return true; // this will check
  if (str.length === 2) return str[0] === str[1]; // this will check the case for string "awwa" if there are two same last character of not

  if (str[0] === str[str.length - 1]) {
    return isPalin(str.slice(1, -1));
  }

  return false;
}

isPalin();

let mat = [];

// [[]]

for (let i = 0; i < 3; i++) {
  mat[i] = [];
  for (let j = 0; j < 3; j++) {
    mat[i][j] = i + j;
  }
}
