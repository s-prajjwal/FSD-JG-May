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

// const arr1 = [3, 12, 31, 49];
// const arr2 = [5, 9, 20];

// [5, 5, 9]

// [3, 5, 9, 12, 17, 19, 20, 21]

function merge(arr, l, m, r) {
  let arr1 = [];
  let arr2 = [];
  let n1 = m - l + 1; // 4
  let n2 = r - m; //

  for (let i = 0; i < n1; i++) {
    arr1.push(arr[l + i]);
  }

  for (let i = 0; i < n2; i++) {
    arr2.push(arr[m + 1 + i]);
  }

  let p1 = 0; // this is index
  let p2 = 0; // this is index
  let res = [];
  let k = 0;

  // while p1 is inside arr1 and p2 is inside arr2
  // if anyone of p1 and p2 exceeds the length of their respective array, then stop the loop
  while (p1 < n1 && p2 < n2) {
    if (arr1[p1] <= arr2[p2]) {
      res[k] = arr1[p1];
      k++;
      p1++;
    } else {
      res[k] = arr2[p2];
      p2++;
      k++;
    }
  }

  // Let's say if p1 is already > n1 -> this loop will not run
  while (p1 < n1) {
    res.push(arr1[p1]);
    p1++;
  }

  // Let's say if p2 is already > n2 -> this loop will not run
  while (p2 < n2) {
    res.push(arr2[p2]);
    p2++;
  }

  // console.log(res);
  for (let i = 0; i < res.length; i++) {
    arr[i] = res[i];
  }
}

// Time Complexity - O(N)
// Space Complexity - S(N)

// console.log(merge(arr1, arr2));

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
  let mid = Math.floor((l + r) / 2);
  if (l < r) {
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
}

const arr = [8, 7, 6, 5, 4, 3, 2, 1];
let l = 0;
let r = arr.length - 1;
mergeSort(arr, l, r);
console.log(arr);
