// convert this invalid max heap into a valid one

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i); // O(h)
  }
}

// [45, 32, 67, 23, 8, 43, 55]
// n = 5
// i = 0

// l = 9
// r = 10
function heapify(arr, i, n) {
  // i =6, l=13, r =14
  let l = 2 * i + 1;
  let r = 2 * i + 2; // index of right child

  // compare left side and right side
  let tempIndex;
  if (l >= n) return;
  else if (l === n - 1) tempIndex = l;
  else tempIndex = arr[l] > arr[r] ? l : r;

  // check between i and tempIndex
  if (arr[i] < arr[tempIndex]) {
    // swapping without extra variable
    // a= 5, b = 6
    // a = a+b -> 11
    // b = a-b -> 11 - 6 = 5
    // a = a-b -> 11- 5 =6

    arr[i] = arr[tempIndex] + arr[i];
    arr[tempIndex] = arr[i] - arr[tempIndex];
    arr[i] = arr[i] - arr[tempIndex];
    // call heapify recursivelly
    heapify(arr, tempIndex, n);
  }
}

function heapSort(arr) {
  // Make the arr a valid max heap
  buildMaxHeap(arr);
  let n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    // swap 0th index and ith index numbers
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // heapify on the remaining heap
    heapify(arr, 0, i); // O(logn)
  }

  // O(nlogn)
}

let maxHeap = [20, 24, 15, 22, 23, 17, 18];
// heapify(maxHeap, 2);
// buildMaxHeap(maxHeap);
heapSort(maxHeap);

console.log(maxHeap);
