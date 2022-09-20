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

const arr1 = [3, 12, 31, 0, 0, 0];
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
  while (p1 < n1 && p2 < n2) {
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

// console.log(merge(arr1, arr2));

// Pseudo Code of Divide part of Merge Sort:

function divide(arr, l, r) {
  // base condition

  if (l === r) {
    return [arr[l]];
  }

  let mid = Math.floor((l + r) / 2);

  let leftArray = divide(arr, l, mid);
  let rightArray = divide(arr, mid + 1, r);

  let mergedArray = merge(leftArray, rightArray);
  return mergedArray;
}

let arr = [38, 3, 42, 5, 7, 51];
let sortedArray = divide(arr, 0, arr.length - 1);
console.log(sortedArray);

let ans = 0;
function reverse(num) {
  if (num == 0) {
    return ans;
  }
  if (num > 0) {
    let temp = num % 10;
    ans = ans * 10 + temp;
    return reverse(Math.floor(num / 10));
  }
  return ans;
}
let num = 121;
let rev = reverse(num);

let obj = {
  c: 1,
  d: 2,
  a: 4,
  g: {
    h: 8,
    j: 10,
  },
};

const { c, d, g } = obj; // Destructing
g.h = 90;
console.log(c, d, g);
console.log(obj.g.h);

[
  [53, 64, 90, 98, 34],
  [91, 53, 64, 90, 98],
  [17, 91, 53, 64, 0],
];
